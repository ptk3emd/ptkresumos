import React, { useEffect, useState } from 'react';
import { Columns3, RotateCcw } from 'lucide-react';
import { MedicalTable } from '../types/clinical';
import { ClinicalCell } from './ClinicalCell';

interface MedicalTableViewProps {
  table: MedicalTable;
  topicTitle: string;
  overrides: Record<string, string>;
  notes: Record<string, string>;
  hiddenCells: Set<string>;
  onToggleHideCell: (cellId: string) => void;
  onHideAllInList: (cellIds: string[]) => void;
  onRevealAllInList: (cellIds: string[]) => void;
  onSaveOverride: (cellId: string, content: string) => void;
  onResetOverride: (cellId: string) => void;
  onSaveNote: (cellId: string, note: string) => void;
}

const MIN_COL = 80;
const MAX_COL = 480;
const defaultWidth = (idx: number) => (idx === 0 ? 130 : 190);

export const MedicalTableView: React.FC<MedicalTableViewProps> = ({
  table,
  topicTitle,
  overrides,
  notes,
  hiddenCells,
  onToggleHideCell,
  onSaveOverride,
  onResetOverride,
  onSaveNote
}) => {
  const hasMultipleColumns = table.headers.length > 2;
  const storageKey = `clinica_col_widths_v1:${topicTitle}|${table.subheading ?? ''}|${table.headers.join('|')}`;
  const [showSliders, setShowSliders] = useState(false);
  const [widths, setWidths] = useState<number[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (Array.isArray(saved) && saved.length === table.headers.length) return saved;
    } catch {
      /* ignore */
    }
    return table.headers.map((_, i) => defaultWidth(i));
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(widths));
    } catch {
      /* ignore */
    }
  }, [storageKey, widths]);

  const setWidth = (idx: number, value: number) =>
    setWidths(prev => prev.map((w, i) => (i === idx ? value : w)));
  const resetWidths = () => setWidths(table.headers.map((_, i) => defaultWidth(i)));
  const totalWidth = widths.reduce((a, b) => a + b, 0);

  return (
    <div className="my-3 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-950">
      {/* Subheading only if defined (e.g. 9.2 subtable) */}
      {table.subheading && (
        <div className="px-3 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">
            {table.subheading}
          </h4>
        </div>
      )}

      {/* Column width controls */}
      {hasMultipleColumns && (
        <div className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          <button
            type="button"
            onClick={() => setShowSliders(v => !v)}
            aria-expanded={showSliders}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white"
          >
            <Columns3 className="w-3.5 h-3.5" />
            Largura das colunas
          </button>
          {showSliders && (
            <div className="px-3 pb-2.5 space-y-1.5">
              {table.headers.map((header, idx) => (
                <label key={idx} className="flex items-center gap-2 text-[11px] text-zinc-700 dark:text-zinc-200">
                  <span className="w-24 sm:w-40 truncate font-medium" title={header}>
                    {header}
                  </span>
                  <input
                    type="range"
                    min={MIN_COL}
                    max={MAX_COL}
                    step={10}
                    value={widths[idx]}
                    onChange={e => setWidth(idx, Number(e.target.value))}
                    className="flex-1 accent-zinc-700 dark:accent-zinc-300"
                    aria-label={`Largura da coluna ${header}`}
                  />
                  <span className="w-9 text-right tabular-nums">{widths[idx]}</span>
                </label>
              ))}
              <button
                type="button"
                onClick={resetWidths}
                className="flex items-center gap-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-200 hover:underline"
              >
                <RotateCcw className="w-3 h-3" /> Restaurar padrão
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile scroll hint for wider tables */}
      {hasMultipleColumns && (
        <div className="sm:hidden px-3 py-1 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 text-[10.5px] text-zinc-600 dark:text-zinc-300 flex items-center justify-between">
          <span>Deslize a tabela para os lados</span>
          <span>→</span>
        </div>
      )}

      {/* Table responsive container */}
      <div className="overflow-x-auto w-full">
        <table
          className="text-left border-collapse text-xs sm:text-sm table-fixed"
          style={{ width: totalWidth, minWidth: '100%' }}
        >
          <colgroup>
            {widths.map((w, i) => (
              <col key={i} style={{ width: w }} />
            ))}
          </colgroup>
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-[11px] sm:text-[11.5px] uppercase tracking-wider text-zinc-600 dark:text-zinc-300 font-semibold">
              {table.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-3 py-2 align-bottom break-words"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map(row => (
              <tr
                key={row.id}
                className="even:bg-zinc-50 dark:even:bg-zinc-900 transition-colors"
              >
                {row.cells.map((defaultText, colIdx) => {
                  const cellId = `${row.id}-c${colIdx}`;
                  const currentText = overrides[cellId] ?? defaultText;
                  const noteText = notes[cellId];
                  const isHidden = hiddenCells.has(cellId);
                  // First column is the category/parameter column
                  const isFirstCol = colIdx === 0;

                  return (
                    <ClinicalCell
                      key={cellId}
                      cellId={cellId}
                      columnIndex={colIdx}
                      isFirstColumn={isFirstCol}
                      defaultContent={defaultText}
                      currentContent={currentText}
                      noteContent={noteText}
                      isHidden={isHidden}
                      topicTitle={topicTitle}
                      onToggleHide={() => onToggleHideCell(cellId)}
                      onSaveOverride={newContent => onSaveOverride(cellId, newContent)}
                      onResetOverride={() => onResetOverride(cellId)}
                      onSaveNote={newNote => onSaveNote(cellId, newNote)}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
