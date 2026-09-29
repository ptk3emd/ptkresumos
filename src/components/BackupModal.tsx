import React, { useRef, useState } from 'react';
import { X, Download, Upload, Trash2, CheckCircle2, AlertTriangle, Database } from 'lucide-react';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  notesCount: number;
  overridesCount: number;
  bookmarksCount: number;
  studiedCount: number;
  onExport: () => void;
  onImport: (json: string) => { success: boolean; error?: string };
  onResetAll: () => void;
}

export const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  notesCount,
  overridesCount,
  bookmarksCount,
  studiedCount,
  onExport,
  onImport,
  onResetAll
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isResetConfirming, setIsResetConfirming] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMessage(null);
    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result as string;
      const res = onImport(content);
      if (res.success) {
        setImportStatus('Backup importado com sucesso!');
        setTimeout(() => setImportStatus(null), 4000);
      } else {
        setErrorMessage(res.error || 'Erro ao importar arquivo');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleConfirmReset = () => {
    onResetAll();
    setIsResetConfirming(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
            <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Dados & Armazenamento Local
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 text-xs">
          {/* Feedback messages */}
          {importStatus && (
            <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{importStatus}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-600 rounded-lg flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Current Saved Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <span className="block text-base font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {studiedCount}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Revisados</span>
            </div>
            <div className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <span className="block text-base font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {notesCount}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Anotações</span>
            </div>
            <div className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <span className="block text-base font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {overridesCount}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Edições</span>
            </div>
            <div className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <span className="block text-base font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {bookmarksCount}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Favoritos</span>
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[11.5px]">
            Todos os seus dados são salvos com segurança no armazenamento local do seu navegador.
            Exporte uma cópia em JSON para segurança ou para usar em outro dispositivo.
          </p>

          {/* Action buttons */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={onExport}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-lg font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar Backup (.json)</span>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-lg font-medium transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Importar Arquivo de Backup</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Danger zone / Reset */}
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
            {isResetConfirming ? (
              <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg space-y-2">
                <p className="text-[11.5px] font-medium text-zinc-900 dark:text-zinc-100">
                  Tem certeza que deseja apagar todas as anotações, edições e favoritos?
                </p>
                <div className="flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsResetConfirming(false)}
                    className="px-2.5 py-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmReset}
                    className="px-3 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded text-xs font-semibold"
                  >
                    Sim, apagar tudo
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsResetConfirming(true)}
                className="flex items-center gap-1.5 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Restaurar dados de fábrica (apagar tudo)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
