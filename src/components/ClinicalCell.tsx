import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, Edit2, MessageSquare, RotateCcw, X } from 'lucide-react';
import { MarkdownView } from './MarkdownView';
import { CellNoteEditor } from './CellNoteEditor';
import { EditCellModal } from './EditCellModal';

interface ClinicalCellProps {
  cellId: string;
  columnIndex: number;
  isFirstColumn?: boolean;
  defaultContent: string;
  currentContent: string;
  noteContent?: string;
  isHidden: boolean;
  topicTitle: string;
  onToggleHide: () => void;
  onSaveOverride: (newContent: string) => void;
  onResetOverride: () => void;
  onSaveNote: (note: string) => void;
}

export const ClinicalCell: React.FC<ClinicalCellProps> = ({
  cellId,
  isFirstColumn = false,
  defaultContent,
  currentContent,
  noteContent,
  isHidden,
  topicTitle,
  onToggleHide,
  onSaveOverride,
  onResetOverride,
  onSaveNote
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);
  const cellRef = useRef<HTMLTableCellElement>(null);
  const touchStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastTapTimeRef = useRef<number>(0);
  const lastDoubleTapTimeRef = useRef<number>(0);

  const isCustomized = currentContent !== defaultContent;
  const hasNote = Boolean(noteContent && noteContent.trim().length > 0);

  // Close active state on outside click or touch
  useEffect(() => {
    function handleOutsideAction(e: Event) {
      if (cellRef.current && !cellRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideAction);
    document.addEventListener('touchstart', handleOutsideAction, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideAction);
      document.removeEventListener('touchstart', handleOutsideAction);
    };
  }, []);

  // First column (Topic parameter/label: e.g. "Definição", "Etiologia", "Critérios")
  // No hide button here: parameter labels remain visible as row headers
  if (isFirstColumn) {
    return (
      <td
        ref={cellRef}
        className="align-top px-3 py-2.5 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-[12.5px] sm:text-[13px] select-text sm:whitespace-nowrap transition-colors"
      >
        <span className="leading-snug">{currentContent}</span>
      </td>
    );
  }

  const handleCellTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartPos.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }
  };

  const handleCellTouchEnd = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    // Don't intercept clicks inside buttons, inputs, links or note editor
    if (target.closest('button, input, textarea, a, [role="button"]')) {
      return;
    }

    if (e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      const dx = Math.abs(touch.clientX - touchStartPos.current.x);
      const dy = Math.abs(touch.clientY - touchStartPos.current.y);
      // If finger moved significantly, user was scrolling the table
      if (dx > 12 || dy > 12) {
        lastTapTimeRef.current = 0;
        return;
      }
    }

    const now = Date.now();
    const timeSinceLastTap = now - lastTapTimeRef.current;

    // Double tap window: between 40ms and 350ms
    if (timeSinceLastTap > 40 && timeSinceLastTap < 350) {
      lastDoubleTapTimeRef.current = now;
      lastTapTimeRef.current = 0;
      onToggleHide();
      setIsActive(false);
    } else {
      lastTapTimeRef.current = now;
    }
  };

  const handleCellDoubleClick = (e: React.MouseEvent) => {
    // If mobile touch double-tap already fired within 500ms, ignore duplicate mouse event
    if (Date.now() - lastDoubleTapTimeRef.current < 500) {
      return;
    }
    const target = e.target as HTMLElement;
    if (target.closest('button, input, textarea, a, [role="button"]')) {
      return;
    }
    lastDoubleTapTimeRef.current = Date.now();
    onToggleHide();
    setIsActive(false);
  };

  const handleCellClick = (e: React.MouseEvent) => {
    // If a double tap/click was just triggered, do not reopen toolbar
    if (Date.now() - lastDoubleTapTimeRef.current < 400) {
      return;
    }
    const target = e.target as HTMLElement;
    if (target.closest('button, input, textarea, a, [role="button"]')) {
      return;
    }
    if (!isHidden) {
      setIsActive(prev => !prev);
    }
  };

  const handleRevealClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    lastTapTimeRef.current = 0;
    lastDoubleTapTimeRef.current = Date.now();
    onToggleHide();
    setIsActive(false);
  };

  return (
    <td
      ref={cellRef}
      onClick={handleCellClick}
      onDoubleClick={handleCellDoubleClick}
      onTouchStart={handleCellTouchStart}
      onTouchEnd={handleCellTouchEnd}
      title="Toque duplo para ocultar ou revelar"
      className={`group relative align-top px-3 py-2.5 sm:px-3.5 sm:py-3 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 transition-colors text-[13.5px] sm:text-[14px] leading-relaxed cursor-pointer select-text ${
        isActive
          ? 'bg-zinc-100 dark:bg-zinc-900 ring-1 ring-inset ring-zinc-400 dark:ring-zinc-600'
          : 'bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900'
      }`}
    >
      {/* Masked / Hidden Active Recall State */}
      {isHidden ? (
        <div
          onClick={handleRevealClick}
          className="cursor-pointer select-none rounded p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-900 border border-dashed border-zinc-400 dark:border-zinc-700 text-center transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 my-0.5"
          title="Toque para revelar ou toque duplo para alternar"
        >
          <div className="flex items-center justify-center gap-1.5 text-zinc-900 dark:text-zinc-100 font-semibold text-xs">
            <EyeOff className="w-3.5 h-3.5 shrink-0" />
            <span>Ocultado para teste de memória</span>
          </div>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5 font-medium">
            Toque para revelar a resposta
          </span>
        </div>
      ) : (
        /* Regular Visible Content */
        <div className="text-zinc-900 dark:text-zinc-100">
          <MarkdownView content={currentContent} />

          {/* Indicator if user customized this cell */}
          {isCustomized && (
            <div className="mt-1.5 flex items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
              <span className="px-1.5 py-0.2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded text-[10.5px] font-medium border border-zinc-200 dark:border-zinc-700">
                Editado
              </span>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  onResetOverride();
                }}
                className="hover:underline flex items-center gap-0.5 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                <RotateCcw className="w-3 h-3" /> Restaurar
              </button>
            </div>
          )}
        </div>
      )}

      {/* User Note Display (if exists and editor is not open) */}
      {hasNote && !isNoteEditorOpen && (
        <div
          onClick={e => {
            e.stopPropagation();
            setIsNoteEditorOpen(true);
          }}
          className="mt-2 p-2 bg-zinc-100 dark:bg-zinc-900 border-l-2 border-zinc-900 dark:border-zinc-100 rounded-r text-xs cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-850 transition-colors"
        >
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-[10.5px] uppercase tracking-wider flex items-center gap-1">
              <MessageSquare className="w-3 h-3" /> Anotação
            </span>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Editar</span>
          </div>
          <div className="text-zinc-800 dark:text-zinc-200 text-xs">
            <MarkdownView content={noteContent!} />
          </div>
        </div>
      )}

      {/* Inline Note Editor */}
      {isNoteEditorOpen && (
        <div onClick={e => e.stopPropagation()}>
          <CellNoteEditor
            initialNote={noteContent || ''}
            onSave={onSaveNote}
            onClose={() => setIsNoteEditorOpen(false)}
          />
        </div>
      )}

      {/* Minimalist Action Toolbar: Shown when tapped (active) or hovered on desktop */}
      <div
        className={`mt-2 pt-1.5 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-1 text-xs transition-opacity ${
          isActive ? 'flex' : 'hidden sm:group-hover:flex'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center gap-1 text-[11px]">
          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              onToggleHide();
            }}
            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            title="Ocultar/revelar resposta (dica: toque duplo na célula)"
          >
            {isHidden ? (
              <>
                <Eye className="w-3 h-3" />
                <span>Revelar</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3 h-3" />
                <span>Ocultar</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              setIsNoteEditorOpen(!isNoteEditorOpen);
            }}
            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            <span>{hasNote ? 'Ver anotação' : 'Anotar'}</span>
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              setIsEditModalOpen(true);
            }}
            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <Edit2 className="w-3 h-3" />
            <span>Editar</span>
          </button>
        </div>

        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            setIsActive(false);
          }}
          className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 p-0.5 rounded"
          title="Fechar barra"
          aria-label="Fechar barra"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Edit Content Modal */}
      <EditCellModal
        cellId={cellId}
        topicTitle={topicTitle}
        defaultContent={defaultContent}
        currentContent={currentContent}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={onSaveOverride}
        onReset={onResetOverride}
      />
    </td>
  );
};
