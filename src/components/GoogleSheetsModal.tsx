import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  LogOut,
  FolderOpen,
  Plus,
  ShieldCheck,
  Calendar,
  Layers
} from 'lucide-react';
import { User } from 'firebase/auth';
import { MedicalTopic } from '../types/clinical';
import {
  initAuth,
  googleSignIn,
  logout as googleLogout,
  getAccessToken
} from '../services/googleAuth';
import {
  listGoogleSpreadsheets,
  createMedicalSpreadsheet,
  exportTopicToExistingSpreadsheet,
  DriveSpreadsheetFile,
  SheetCreationResult
} from '../services/googleSheets';

interface GoogleSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  allTopics: MedicalTopic[];
  currentTopic?: MedicalTopic;
  overrides: Record<string, string>;
  notes: Record<string, string>;
  studiedTopics: Set<string>;
}

export const GoogleSheetsModal: React.FC<GoogleSheetsModalProps> = ({
  isOpen,
  onClose,
  allTopics,
  currentTopic,
  overrides,
  notes,
  studiedTopics
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [hasToken, setHasToken] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [isLoadingSheets, setIsLoadingSheets] = useState(false);
  const [recentSheets, setRecentSheets] = useState<DriveSpreadsheetFile[]>([]);
  const [selectedSheetId, setSelectedSheetId] = useState<string>('');

  // Operational states
  const [isExecuting, setIsExecuting] = useState(false);
  const [operationError, setOperationError] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{ message: string; url: string } | null>(null);

  // Mandatory Workspace Confirmation state
  const [pendingConfirmation, setPendingConfirmation] = useState<{
    actionType: 'create_full' | 'export_current';
    title: string;
    description: string;
    details: string[];
  } | null>(null);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setCurrentUser(user);
        setHasToken(Boolean(token));
      },
      () => {
        setCurrentUser(null);
        setHasToken(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // When modal opens and user is authenticated, fetch their recent Google Sheets
  useEffect(() => {
    if (isOpen && hasToken) {
      loadRecentSheets();
    }
  }, [isOpen, hasToken]);

  const loadRecentSheets = async () => {
    setIsLoadingSheets(true);
    setOperationError(null);
    try {
      const files = await listGoogleSpreadsheets();
      setRecentSheets(files);
      if (files.length > 0 && !selectedSheetId) {
        setSelectedSheetId(files[0].id);
      }
    } catch (err: any) {
      console.error('Failed to load recent sheets:', err);
      // Non-fatal, just inform
    } finally {
      setIsLoadingSheets(false);
    }
  };

  const handleSignIn = async () => {
    setIsAuthenticating(true);
    setAuthError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setCurrentUser(result.user);
        setHasToken(true);
      }
    } catch (err: any) {
      console.error('Sign-in error:', err);
      setAuthError(err.message || 'Falha ao autenticar com o Google.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await googleLogout();
      setCurrentUser(null);
      setHasToken(false);
      setRecentSheets([]);
      setSuccessResult(null);
    } catch (err: any) {
      console.error('Sign-out error:', err);
    }
  };

  // STEP 1: Request Confirmation for Creating a Complete Spreadsheet
  const handleRequestCreateFull = () => {
    setSuccessResult(null);
    setOperationError(null);
    setPendingConfirmation({
      actionType: 'create_full',
      title: 'Criar Nova Planilha no Google Drive',
      description:
        'Será criada uma nova planilha no seu Google Sheets com todos os 35 temas e capítulos do Manual de Medicina.',
      details: [
        `Arquivo: "Tabelas Clínicas - Manual de Medicina (${new Date().toLocaleDateString('pt-BR')})"`,
        `Capítulos incluídos: Cardiologia, Pneumologia, Neurologia, Reumatologia, Infectologia e outros`,
        `Dados inclusos: Comparações clínicas completas, anotações pessoais (${Object.keys(notes).length}) e status de revisão (${studiedTopics.size} temas estudados)`,
        'Local: Seu Google Drive pessoal'
      ]
    });
  };

  // STEP 2: Request Confirmation for Exporting Current Topic
  const handleRequestExportCurrent = () => {
    if (!currentTopic || !selectedSheetId) return;
    setSuccessResult(null);
    setOperationError(null);

    const targetSheet = recentSheets.find(s => s.id === selectedSheetId);
    const targetName = targetSheet ? targetSheet.name : selectedSheetId;

    setPendingConfirmation({
      actionType: 'export_current',
      title: `Sincronizar tema "${currentTopic.title}" no Google Sheets`,
      description: `Uma nova aba para "${currentTopic.title}" será criada ou atualizada na planilha selecionada.`,
      details: [
        `Planilha de destino: "${targetName}"`,
        `Tema: ${currentTopic.title} (${currentTopic.chapterTitle})`,
        `Tabelas clínicas: ${currentTopic.tables.length} tabelas com parâmetros e critérios`,
        `Status atual: ${studiedTopics.has(currentTopic.id) ? 'Revisado' : 'Pendente'}`
      ]
    });
  };

  // STEP 3: Execute Confirmed Action
  const handleExecuteConfirmedAction = async () => {
    if (!pendingConfirmation) return;

    setIsExecuting(true);
    setOperationError(null);
    setSuccessResult(null);

    try {
      if (pendingConfirmation.actionType === 'create_full') {
        const title = `Tabelas Clínicas - Manual de Medicina (${new Date().toLocaleDateString('pt-BR')})`;
        const res: SheetCreationResult = await createMedicalSpreadsheet(
          title,
          allTopics,
          overrides,
          notes,
          studiedTopics
        );
        setSuccessResult({
          message: 'Planilha criada com sucesso no seu Google Drive!',
          url: res.spreadsheetUrl
        });
        loadRecentSheets();
      } else if (pendingConfirmation.actionType === 'export_current' && currentTopic) {
        const url = await exportTopicToExistingSpreadsheet(
          selectedSheetId,
          currentTopic,
          overrides,
          notes,
          studiedTopics.has(currentTopic.id)
        );
        setSuccessResult({
          message: `Tema "${currentTopic.title}" sincronizado com sucesso na planilha!`,
          url
        });
      }
      setPendingConfirmation(null);
    } catch (err: any) {
      console.error('Operation error:', err);
      setOperationError(err.message || 'Erro ao comunicar com a API do Google Sheets.');
    } finally {
      setIsExecuting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl max-w-lg w-full p-4 sm:p-6 shadow-sm text-zinc-900 dark:text-zinc-100 my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-snug">Google Sheets</h3>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-300">
                Sincronize tabelas, anotações e revisões com suas planilhas
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-600 hover:text-black dark:hover:text-white p-1 rounded-md transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Error Banner */}
        {authError && (
          <div className="mb-4 p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{authError}</span>
          </div>
        )}

        {/* Operation Error Banner */}
        {operationError && (
          <div className="mb-4 p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{operationError}</span>
          </div>
        )}

        {/* Success Banner */}
        {successResult && (
          <div className="mb-4 p-3 bg-zinc-100 dark:bg-zinc-850 border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 rounded-lg space-y-2">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0" />
              <span>{successResult.message}</span>
            </div>
            <a
              href={successResult.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-md font-semibold text-xs hover:opacity-90 transition-opacity"
            >
              <span>Abrir no Google Sheets</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* STATE 1: Mandatory Workspace Destructive / Mutation Confirmation Dialog */}
        {pendingConfirmation ? (
          <div className="p-4 bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-750 rounded-lg space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0" />
              <span>Confirmar Ação no Google Sheets</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              {pendingConfirmation.description}
            </p>
            <div className="bg-white dark:bg-zinc-900 p-2.5 rounded border border-zinc-200 dark:border-zinc-800 text-[11.5px] space-y-1 text-zinc-600 dark:text-zinc-300">
              {pendingConfirmation.details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setPendingConfirmation(null)}
                disabled={isExecuting}
                className="px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleExecuteConfirmedAction}
                disabled={isExecuting}
                className="px-3.5 py-1.5 rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold hover:opacity-90 flex items-center gap-1.5 disabled:opacity-50"
              >
                {isExecuting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Escrevendo no Google Sheets...</span>
                  </>
                ) : (
                  <span>Confirmar e Exportar</span>
                )}
              </button>
            </div>
          </div>
        ) : !currentUser || !hasToken ? (
          /* STATE 2: NOT AUTHENTICATED - Official Google Sign-In */
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600">
              <FileSpreadsheet className="w-6 h-6" />
            </div>

            <div className="space-y-1 max-w-sm mx-auto">
              <h4 className="font-semibold text-sm">Conecte sua Conta Google</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Permita que o aplicativo crie e sincronize suas planilhas de estudo clínico no Google Drive e Google Sheets.
              </p>
            </div>

            {/* Official Google Material Sign-In Button from SKILL.md */}
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={handleSignIn}
                disabled={isAuthenticating}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-750 transition-colors shadow-xs text-xs font-medium text-zinc-700 dark:text-zinc-200 disabled:opacity-50"
              >
                {isAuthenticating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-600" />
                    <span>Conectando com o Google...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 48 48">
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                    </svg>
                    <span>Entrar com o Google</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* STATE 3: AUTHENTICATED - Operations Dashboard */
          <div className="space-y-4">
            {/* User Profile Bar */}
            <div className="flex items-center justify-between p-2.5 bg-zinc-50 dark:bg-zinc-850 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs">
              <div className="flex items-center gap-2.5 overflow-hidden">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || 'Avatar'}
                    className="w-7 h-7 rounded-full shrink-0"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center font-bold text-zinc-600 dark:text-zinc-300">
                    {currentUser.email?.[0].toUpperCase() || 'U'}
                  </div>
                )}
                <div className="truncate">
                  <div className="font-semibold truncate">
                    {currentUser.displayName || 'Usuário Google'}
                  </div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-300 truncate">
                    {currentUser.email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSignOut}
                className="flex items-center gap-1 px-2 py-1 text-[11px] text-zinc-600 hover:text-black dark:hover:text-white rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Desconectar conta Google"
              >
                <LogOut className="w-3 h-3" />
                <span>Sair</span>
              </button>
            </div>

            {/* Action 1: Create Full New Spreadsheet */}
            <div className="p-3.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Plus className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                  <span className="font-bold text-xs">Criar Nova Planilha Completa</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
                  35 temas
                </span>
              </div>
              <p className="text-[11.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Gera uma planilha organizada com abas por capítulo clínico, incluindo todas as tabelas, notas de estudo e status de revisão.
              </p>
              <button
                type="button"
                onClick={handleRequestCreateFull}
                className="w-full mt-1.5 py-2 px-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-md text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Exportar Manual Completo para Google Sheets</span>
              </button>
            </div>

            {/* Action 2: Export Current Topic (if in single view) */}
            {currentTopic && (
              <div className="p-3.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                    <span className="font-bold text-xs">Tema Atual: {currentTopic.title}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
                    {currentTopic.tables.length} tabelas
                  </span>
                </div>

                {recentSheets.length > 0 ? (
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-zinc-600 dark:text-zinc-300 block font-medium">
                      Selecione a planilha de destino:
                    </label>
                    <select
                      value={selectedSheetId}
                      onChange={e => setSelectedSheetId(e.target.value)}
                      className="w-full text-xs p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      {recentSheets.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={handleRequestExportCurrent}
                      className="w-full mt-2 py-1.5 px-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Adicionar aba com este tema à planilha</span>
                    </button>
                  </div>
                ) : (
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-300 italic">
                    Nenhuma planilha encontrada recentemente no Drive. Crie uma nova acima para habilitar o envio individual.
                  </p>
                )}
              </div>
            )}

            {/* Recent Sheets list in Drive */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Suas Planilhas no Drive</span>
                </span>
                <button
                  type="button"
                  onClick={loadRecentSheets}
                  disabled={isLoadingSheets}
                  className="text-[11px] text-zinc-600 hover:text-black dark:hover:text-white flex items-center gap-1"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoadingSheets ? 'animate-spin' : ''}`} />
                  <span>Atualizar</span>
                </button>
              </div>

              {isLoadingSheets ? (
                <div className="py-4 text-center text-xs text-zinc-600 flex items-center justify-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Carregando planilhas do Google Drive...</span>
                </div>
              ) : recentSheets.length === 0 ? (
                <p className="text-xs text-zinc-600 italic text-center py-3">
                  Nenhuma planilha encontrada. Clique em "Exportar Manual Completo" para criar a primeira!
                </p>
              ) : (
                <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  {recentSheets.map(sheet => (
                    <div
                      key={sheet.id}
                      className="flex items-center justify-between p-2 rounded-md bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 text-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300 shrink-0" />
                        <span className="truncate font-medium">{sheet.name}</span>
                      </div>
                      <a
                        href={sheet.webViewLink || `https://docs.google.com/spreadsheets/d/${sheet.id}/edit`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-black dark:hover:text-white p-1 rounded shrink-0 flex items-center gap-1 text-[11px]"
                        title="Abrir no Google Sheets"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-600">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-zinc-900 dark:text-zinc-100" />
            <span>Google Workspace API protegida</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="hover:underline text-zinc-600 dark:text-zinc-300 font-medium"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
