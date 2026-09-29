import { getAccessToken } from './googleAuth';
import { MedicalTopic } from '../types/clinical';

export interface DriveSpreadsheetFile {
  id: string;
  name: string;
  modifiedTime: string;
  webViewLink?: string;
}

export interface SheetCreationResult {
  spreadsheetId: string;
  spreadsheetUrl: string;
  title: string;
}

/**
 * Lists the user's Google Sheets from Drive
 */
export async function listGoogleSpreadsheets(): Promise<DriveSpreadsheetFile[]> {
  const token = await getAccessToken();
  if (!token) throw new Error('Não autenticado. Por favor, conecte sua conta Google.');

  const query = encodeURIComponent("mimeType='application/vnd.google-apps.spreadsheet' and trashed=false");
  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${query}&orderBy=modifiedTime desc&pageSize=15&fields=files(id,name,modifiedTime,webViewLink)`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Erro ao listar planilhas (${response.status})`);
  }

  const data = await response.json();
  return data.files || [];
}

/**
 * Creates a brand new Google Spreadsheet in the user's Drive with medical topics
 */
export async function createMedicalSpreadsheet(
  title: string,
  topics: MedicalTopic[],
  overrides: Record<string, string>,
  notes: Record<string, string>,
  studiedTopics: Set<string>
): Promise<SheetCreationResult> {
  const token = await getAccessToken();
  if (!token) throw new Error('Não autenticado. Por favor, conecte sua conta Google.');

  // Build sheets definition
  // Tab 1: Overview & Progress
  const overviewRows: (string | number)[][] = [
    ['ÍNDICE DE TEMAS CLÍNICOS E REVISÃO'],
    ['Capítulo', 'ID', 'Título do Tema', 'Status de Revisão', 'Tabelas', 'Anotações Feitas'],
  ];

  topics.forEach(t => {
    const isStudied = studiedTopics.has(t.id);
    let topicNotesCount = 0;
    t.tables.forEach(table => {
      table.rows.forEach(r => {
        r.cells.forEach((_, cIdx) => {
          const cellId = `${r.id}-c${cIdx}`;
          if (notes[cellId]?.trim()) topicNotesCount++;
        });
      });
    });

    overviewRows.push([
      t.chapterTitle,
      t.id,
      t.title,
      isStudied ? 'REVISADO' : 'PENDENTE',
      t.tables.length,
      topicNotesCount > 0 ? `${topicNotesCount} anotações` : 'Nenhuma'
    ]);
  });

  // Create initial spreadsheet
  const createPayload = {
    properties: {
      title: title || 'Manual de Medicina - Tabelas Clínicas'
    },
    sheets: [
      {
        properties: {
          title: 'Visão Geral & Progresso',
          gridProperties: {
            frozenRowCount: 2
          }
        }
      }
    ]
  };

  const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createPayload)
  });

  if (!createRes.ok) {
    const errorData = await createRes.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Erro ao criar planilha (${createRes.status})`);
  }

  const createdSpreadsheet = await createRes.json();
  const spreadsheetId = createdSpreadsheet.spreadsheetId;
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Write Overview Data
  await updateSheetRange(spreadsheetId, 'Visão Geral & Progresso!A1', overviewRows);

  // Now export up to 10 key topic tabs or chapters
  // Group topics by chapter to keep the spreadsheet structured and clean
  const chaptersMap = new Map<string, MedicalTopic[]>();
  topics.forEach(t => {
    const list = chaptersMap.get(t.chapterTitle) || [];
    list.push(t);
    chaptersMap.set(t.chapterTitle, list);
  });

  // Add chapter sheets
  for (const [chapterTitle, chapterTopics] of chaptersMap.entries()) {
    // Sanitize sheet name (Google Sheets max 100 chars, no special chars)
    const cleanSheetName = chapterTitle.replace(/[\\/*?:[\]]/g, '').slice(0, 30);
    
    // Add sheet tab
    const addSheetRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requests: [
          {
            addSheet: {
              properties: {
                title: cleanSheetName,
                gridProperties: {
                  frozenRowCount: 2
                }
              }
            }
          }
        ]
      })
    });

    if (addSheetRes.ok) {
      const chapterRows: (string | number)[][] = [
        [chapterTitle.toUpperCase()],
      ];

      chapterTopics.forEach(topic => {
        chapterRows.push([]);
        chapterRows.push([`>>> ${topic.title} (${studiedTopics.has(topic.id) ? 'Revisado' : 'Pendente'})`]);
        if (topic.note) {
          chapterRows.push(['Nota do Tema:', topic.note]);
        }

        topic.tables.forEach(table => {
          if (table.subheading) {
            chapterRows.push(['Subtítulo:', table.subheading]);
          }
          // Header row with Notes column
          chapterRows.push([...table.headers, 'Minhas Anotações']);

          // Rows
          table.rows.forEach(row => {
            const rowValues = row.cells.map((defaultVal, colIdx) => {
              const cellId = `${row.id}-c${colIdx}`;
              return overrides[cellId] || defaultVal;
            });

            // Check if any cell in row has personal note
            const notesInRow = row.cells
              .map((_, colIdx) => {
                const cellId = `${row.id}-c${colIdx}`;
                return notes[cellId] ? `[${table.headers[colIdx] || colIdx}]: ${notes[cellId]}` : null;
              })
              .filter(Boolean)
              .join(' | ');

            rowValues.push(notesInRow || '-');
            chapterRows.push(rowValues);
          });
        });
      });

      await updateSheetRange(spreadsheetId, `'${cleanSheetName}'!A1`, chapterRows);
    }
  }

  return {
    spreadsheetId,
    spreadsheetUrl,
    title: createdSpreadsheet.properties?.title || title
  };
}

/**
 * Appends or creates a dedicated tab for a single topic in an existing spreadsheet
 */
export async function exportTopicToExistingSpreadsheet(
  spreadsheetId: string,
  topic: MedicalTopic,
  overrides: Record<string, string>,
  notes: Record<string, string>,
  isStudied: boolean
): Promise<string> {
  const token = await getAccessToken();
  if (!token) throw new Error('Não autenticado. Por favor, conecte sua conta Google.');

  const cleanTabTitle = topic.title.replace(/[\\/*?:[\]]/g, '').slice(0, 30);

  // Try adding a new sheet with this topic title
  try {
    await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requests: [
          {
            addSheet: {
              properties: {
                title: cleanTabTitle,
                gridProperties: {
                  frozenRowCount: 2
                }
              }
            }
          }
        ]
      })
    });
  } catch (e) {
    // If tab already exists, we will overwrite its range
  }

  const rows: (string | number)[][] = [
    [topic.title.toUpperCase(), `Status: ${isStudied ? 'REVISADO' : 'PENDENTE'}`],
    ['Capítulo:', topic.chapterTitle]
  ];

  if (topic.note) {
    rows.push(['Nota:', topic.note]);
  }

  topic.tables.forEach(table => {
    rows.push([]);
    if (table.subheading) {
      rows.push(['Tabela:', table.subheading]);
    }
    rows.push([...table.headers, 'Minhas Anotações']);

    table.rows.forEach(row => {
      const rowValues = row.cells.map((defaultVal, colIdx) => {
        const cellId = `${row.id}-c${colIdx}`;
        return overrides[cellId] || defaultVal;
      });

      const notesInRow = row.cells
        .map((_, colIdx) => {
          const cellId = `${row.id}-c${colIdx}`;
          return notes[cellId] ? `[${table.headers[colIdx] || colIdx}]: ${notes[cellId]}` : null;
        })
        .filter(Boolean)
        .join(' | ');

      rowValues.push(notesInRow || '-');
      rows.push(rowValues);
    });
  });

  await updateSheetRange(spreadsheetId, `'${cleanTabTitle}'!A1`, rows);
  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=0`;
}

/**
 * Updates a range of values in Google Sheets
 */
async function updateSheetRange(
  spreadsheetId: string,
  range: string,
  values: (string | number)[][]
): Promise<void> {
  const token = await getAccessToken();
  if (!token) throw new Error('Token de acesso ausente.');

  const encodedRange = encodeURIComponent(range);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedRange}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values
      })
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Erro ao escrever dados na planilha (${response.status})`);
  }
}
