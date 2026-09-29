import React, { useState } from 'react';
import { X, Check, RotateCcw, Bold, Italic, List, Code, AlertTriangle } from 'lucide-react';
import { MarkdownView } from './MarkdownView';

interface EditCellModalProps {
  cellId: string;
  topicTitle: string;
  defaultContent: string;
  currentContent: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newContent: string) => void;
  onReset: () => void;
}

export const EditCellModal: React.FC<EditCellModalProps> = ({
  topicTitle,
  defaultContent,
  currentContent,
  isOpen,
  onClose,
  onSave,
  onReset
}) => {
  const [content, setContent] = useState(currentContent);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isOpen) return null;

  const isModified = content !== defaultContent;

  const insertFormatting = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('cell-edit-textarea') as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const replacement = `${prefix}${selectedText || 'texto'}${suffix}`;
    const nextContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(nextContent);
  };

  const handleSave = () => {
    onSave(content);
    onClose();
  };

  const executeReset = () => {
    setContent(defaultContent);
    onReset();
    setShowResetConfirm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Editar Célula
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-xs sm:max-w-md">
              {topicTitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-xs">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => insertFormatting('**', '**')}
              className="p-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded font-bold"
              title="Negrito (**)"
            >
              <Bold className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('*', '*')}
              className="p-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded italic"
              title="Itálico (*)"
            >
              <Italic className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('- ')}
              className="p-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded"
              title="Lista (- )"
            >
              <List className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('`', '`')}
              className="p-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded"
              title="Código (`)"
            >
              <Code className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-1 bg-zinc-200 dark:bg-zinc-800 p-0.5 rounded text-[11px]">
            <button
              type="button"
              onClick={() => setActiveTab('editor')}
              className={`px-2 py-0.5 rounded transition-colors ${
                activeTab === 'editor'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Editor
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`px-2 py-0.5 rounded transition-colors ${
                activeTab === 'preview'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Prévia
            </button>
          </div>
        </div>

        {/* Reset Confirmation Banner (in-modal, no window.confirm) */}
        {showResetConfirm && (
          <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 text-xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Restaurar esta célula para o texto original?</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-2 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={executeReset}
                className="px-2 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded"
              >
                Sim, restaurar
              </button>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
          {activeTab === 'editor' ? (
            <textarea
              id="cell-edit-textarea"
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={8}
              className="w-full h-full min-h-[160px] p-3 text-xs sm:text-sm font-sans leading-relaxed bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 resize-none"
              placeholder="Edite o conteúdo em Markdown..."
              autoFocus
            />
          ) : (
            <div className="min-h-[160px] p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <MarkdownView content={content} />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-xs">
          <div>
            {isModified && (
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center gap-1 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:underline px-1 py-0.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Restaurar original</span>
                <span className="sm:hidden">Restaurar</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white rounded"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1 px-3.5 py-1.5 bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded font-semibold transition-colors"
            >
              <Check className="w-3.5 h-3.5" /> Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
