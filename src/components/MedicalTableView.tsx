import React from 'react';
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

      {/* Mobile scroll hint for wider tables */}
      {hasMultipleColumns && (
        <div className="sm:hidden px-3 py-1 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 text-[10.5px] text-zinc-400 dark:text-zinc-500 flex items-center justify-between">
          <span>Deslize a tabela para os lados</span>
          <span>→</span>
        </div>
      )}

      {/* Table responsive container */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[340px] sm:min-w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-[11px] sm:text-[11.5px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
              {table.headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`px-3 py-2 ${idx === 0 ? 'w-28 sm:w-40 shrink-0' : 'min-w-[140px]'}`}
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
