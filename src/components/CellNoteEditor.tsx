import React, { useState } from 'react';
import { Check, X, Trash2, Edit3, Eye } from 'lucide-react';
import { MarkdownView } from './MarkdownView';

interface CellNoteEditorProps {
  initialNote: string;
  onSave: (note: string) => void;
  onClose: () => void;
}

export const CellNoteEditor: React.FC<CellNoteEditorProps> = ({
  initialNote,
  onSave,
  onClose
}) => {
  const [text, setText] = useState(initialNote);
  const [previewMode, setPreviewMode] = useState(false);

  const handleSave = () => {
    onSave(text);
    onClose();
  };

  const handleClear = () => {
    onSave('');
    onClose();
  };

  return (
    <div className="mt-3 p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg text-sm transition-all animate-fadeIn">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            Minhas Anotações & Comentários
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            (Suporta Markdown)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            {previewMode ? (
              <>
                <Edit3 className="w-3.5 h-3.5" /> Editar
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" /> Prévia
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-black dark:hover:text-white rounded"
            title="Fechar anotações"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {previewMode ? (
        <div className="min-h-[70px] p-2.5 bg-white dark:bg-zinc-950 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100">
          {text.trim() ? (
            <MarkdownView content={text} />
          ) : (
            <p className="text-zinc-400 italic text-xs">Nenhuma anotação escrita ainda.</p>
          )}
        </div>
      ) : (
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Ex: Pegadinha de prova: em idosos lembrar de dosar TSH antes. Dica de conduta..."
          rows={3}
          className="w-full p-2.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 font-sans leading-relaxed resize-y"
          autoFocus
        />
      )}

      <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
        <div>
          {initialNote && (
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:underline px-1 py-0.5"
            >
              <Trash2 className="w-3 h-3" /> Excluir anotação
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-1 px-3 py-1 bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded text-xs font-semibold transition-colors shadow-xs"
          >
            <Check className="w-3.5 h-3.5" /> Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
