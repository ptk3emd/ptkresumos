import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  List,
  Database,
  EyeOff,
  CheckCircle2,
  FileSpreadsheet,
  Maximize2,
  Bell,
  Menu,
  X
} from 'lucide-react';
import { StudyTimer } from './StudyTimer';
import { allTopics } from '../data/allChapters';

interface HeaderProps {
  viewMode: 'single' | 'all';
  onViewModeChange: (mode: 'single' | 'all') => void;
  onOpenToc: () => void;
  onOpenBackup: () => void;
  onOpenSheets: () => void;
  onToggleFocusMode: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  hiddenCount: number;
  onRevealAllGlobally: () => void;
  notesCount: number;
  studiedCount: number;
  totalTopics: number;
  dueReviewsCount?: number;
  totalScheduledReviewsCount?: number;
  onOpenReviews?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onViewModeChange,
  onOpenToc,
  onOpenBackup,
  onOpenSheets,
  onToggleFocusMode,
  theme,
  onToggleTheme,
  hiddenCount,
  onRevealAllGlobally,
  notesCount,
  studiedCount,
  totalTopics,
  dueReviewsCount = 0,
  totalScheduledReviewsCount = 0,
  onOpenReviews
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const studiedPercent = totalTopics > 0 ? Math.round((studiedCount / totalTopics) * 100) : 0;

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors w-full">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        {/* Top Row: Responsive layout, guaranteed to never overflow on mobile */}
        <div className="h-13 flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Brand & Progress (Left) */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <button
              type="button"
              onClick={onOpenToc}
              className="flex items-center gap-1.5 sm:gap-2 text-left group min-w-0"
              title="Abrir índice dos temas clínicos"
            >
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 shrink-0" />
              <span className="text-zinc-900 dark:text-zinc-100 font-bold text-xs sm:text-base tracking-tight truncate max-w-[110px] sm:max-w-none">
                Clínica Médica
              </span>
            </button>

            {/* Subtle Study Progress */}
            <button
              type="button"
              onClick={onOpenToc}
              className="flex items-center gap-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors tabular-nums shrink-0"
              title={`Progresso: ${studiedCount} de ${totalTopics} revisados (${studiedPercent}%). Clique para ver índice.`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{studiedCount}/{totalTopics}</span>
            </button>
          </div>

          {/* Desktop Controls (hidden on mobile, visible on sm and up) */}
          <div className="hidden sm:flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Review Reminders Section */}
            {onOpenReviews && (
              <button
                type="button"
                onClick={onOpenReviews}
                className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                  dueReviewsCount > 0
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-2xs hover:bg-black dark:hover:bg-white'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
                }`}
                title={
                  dueReviewsCount > 0
                    ? `${dueReviewsCount} tema(s) para revisar hoje. Clique para ver.`
                    : 'Lembretes de revisão. Clique para gerenciar.'
                }
                aria-label="Lembretes de Revisão"
              >
                <Bell className={`w-3.5 h-3.5 ${dueReviewsCount > 0 ? 'fill-current' : ''}`} />
                <span>
                  {dueReviewsCount > 0 ? `${dueReviewsCount} para revisar` : 'Revisões'}
                </span>
                {dueReviewsCount === 0 && totalScheduledReviewsCount > 0 && (
                  <span className="text-[10px] text-zinc-600 tabular-nums">
                    ({totalScheduledReviewsCount})
                  </span>
                )}
              </button>
            )}

            {/* Pomodoro Study Timer */}
            <StudyTimer />

            {/* View Mode Switcher (Compact Segmented Control) */}
            <div className="flex items-center p-0.5 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-[11px] font-medium">
              <button
                type="button"
                onClick={() => onViewModeChange('single')}
                className={`px-2 py-1 rounded transition-colors ${
                  viewMode === 'single'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                }`}
                title="Ver um tópico de cada vez"
              >
                1 Tópico
              </button>
              <button
                type="button"
                onClick={() => onViewModeChange('all')}
                className={`px-2 py-1 rounded transition-colors ${
                  viewMode === 'all'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                }`}
                title="Ver todas as tabelas em sequência"
              >
                Todas
              </button>
            </div>

            {/* Test count pill (if active) */}
            {hiddenCount > 0 && (
              <button
                type="button"
                onClick={onRevealAllGlobally}
                className="flex items-center gap-1 px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg text-[11px] font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700"
                title="Clique para revelar todas as células ocultas"
              >
                <EyeOff className="w-3 h-3" />
                <span className="tabular-nums">{hiddenCount}</span>
              </button>
            )}

            {/* Table of Contents Button */}
            <button
              type="button"
              onClick={onOpenToc}
              className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850 rounded-lg transition-colors"
              title="Índice dos capítulos"
              aria-label="Índice dos capítulos"
            >
              <List className="w-4 h-4" />
            </button>

            {/* Google Sheets Sync Button */}
            <button
              type="button"
              onClick={onOpenSheets}
              className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850 rounded-lg transition-colors"
              title="Google Sheets: exportar e sincronizar planilhas"
              aria-label="Google Sheets"
            >
              <FileSpreadsheet className="w-4 h-4" />
            </button>

            {/* Focus Mode Button */}
            <button
              type="button"
              onClick={onToggleFocusMode}
              className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850 rounded-lg transition-colors"
              title="Modo Foco: foco total nas tabelas sem distrações"
              aria-label="Modo Foco"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Backup / Data Button */}
            <button
              type="button"
              onClick={onOpenBackup}
              className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850 rounded-lg transition-colors relative"
              title="Backup e anotações"
              aria-label="Backup e anotações"
            >
              <Database className="w-4 h-4" />
              {notesCount > 0 && (
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              )}
            </button>

            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850 rounded-lg transition-colors"
              title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              aria-label="Alternar modo escuro e claro"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Controls (< sm, guaranteed zero overflow) */}
          <div className="flex sm:hidden items-center gap-1 shrink-0">
            {/* Quick Review Reminders indicator if onOpenReviews exists */}
            {onOpenReviews && (
              <button
                type="button"
                onClick={onOpenReviews}
                className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center gap-1 ${
                  dueReviewsCount > 0
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-2xs'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
                title={dueReviewsCount > 0 ? `${dueReviewsCount} revisões hoje` : 'Lembretes de revisão'}
                aria-label="Lembretes de revisão"
              >
                <Bell className={`w-3.5 h-3.5 ${dueReviewsCount > 0 ? 'fill-current' : ''}`} />
                {dueReviewsCount > 0 && (
                  <span className="font-bold tabular-nums text-[11px]">{dueReviewsCount}</span>
                )}
              </button>
            )}

            {/* Compact Study Timer */}
            <StudyTimer />

            {/* Quick Table of Contents Button */}
            <button
              type="button"
              onClick={onOpenToc}
              className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors"
              title="Índice de capítulos"
              aria-label="Índice de capítulos"
            >
              <List className="w-4 h-4" />
            </button>

            {/* Mobile Tools Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors relative"
              title="Menu de ferramentas e opções"
              aria-label="Menu de ferramentas"
            >
              <Menu className="w-4 h-4" />
              {(notesCount > 0 || hiddenCount > 0) && (
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Visual Progress Bar Line along bottom edge of header */}
      <div
        className="w-full h-1 bg-zinc-100 dark:bg-zinc-900 overflow-hidden"
        role="progressbar"
        aria-valuenow={studiedPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        title={`Progresso: ${studiedCount} de ${totalTopics} temas (${studiedPercent}%)`}
      >
        <div
          className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ease-out"
          style={{ width: `${studiedPercent}%` }}
        />
      </div>

      {/* Mobile Menu Action Sheet Drawer (Zero gradient, flat monochrome solid, no blur) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-end sm:hidden bg-black/60 animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de ferramentas"
        >
          <div
            className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 rounded-t-2xl p-4 space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Header of Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                <span className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Ferramentas & Opções</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-zinc-600 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* View Mode Switcher (Segmented Control) */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                Modo de Visualização
              </div>
              <div className="grid grid-cols-2 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => {
                    onViewModeChange('single');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-3 rounded-md text-center transition-colors ${
                    viewMode === 'single'
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-2xs'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  1 Tópico por vez
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onViewModeChange('all');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-3 rounded-md text-center transition-colors ${
                    viewMode === 'all'
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-2xs'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Todas as Tabelas
                </button>
              </div>
            </div>

            {/* Action Items List */}
            <div className="space-y-1 pt-1">
              {/* Table of Contents */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenToc();
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    <List className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Índice Geral de Capítulos</div>
                    <div className="text-[11px] text-zinc-600 dark:text-zinc-300">{allTopics.length} temas organizados por especialidade</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">→</span>
              </button>

              {/* Focus / Zen Mode */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onToggleFocusMode();
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Modo Foco (Zen)</div>
                    <div className="text-[11px] text-zinc-600 dark:text-zinc-300">Esconde cabeçalho e distrações para imersão</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">→</span>
              </button>

              {/* Spaced Review Reminders */}
              {onOpenReviews && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenReviews();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                        <span>Revisões Espaçadas</span>
                        {dueReviewsCount > 0 && (
                          <span className="px-1.5 py-0.2 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-[10px] font-bold">
                            {dueReviewsCount} hoje
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-300">
                        {totalScheduledReviewsCount > 0 ? `${totalScheduledReviewsCount} agendados no total` : 'Gerenciar lembretes de tópicos'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-600">→</span>
                </button>
              )}

              {/* Google Sheets */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSheets();
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Google Sheets</div>
                    <div className="text-[11px] text-zinc-600 dark:text-zinc-300">Exportar tabelas e sincronizar planilhas</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">→</span>
              </button>

              {/* Backup & Annotations */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBackup();
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 relative">
                    <Database className="w-4 h-4" />
                    {notesCount > 0 && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      <span>Backup & Anotações</span>
                      {notesCount > 0 && (
                        <span className="text-[10px] text-zinc-600 dark:text-zinc-300">({notesCount} notas)</span>
                      )}
                    </div>
                    <div className="text-[11px] text-zinc-600 dark:text-zinc-300">Salvar, restaurar dados e exportar notas</div>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">→</span>
              </button>

              {/* Reveal Hidden Active Recall Cells (if any) */}
              {hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRevealAllGlobally();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        Revelar Respostas Ocultas ({hiddenCount})
                      </div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-300">Exibir todas as células mascaradas para teste</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Revelar</span>
                </button>
              )}

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={() => {
                  onToggleTheme();
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
                    </div>
                    <div className="text-[11px] text-zinc-600 dark:text-zinc-300">
                      Tema atual: {theme === 'dark' ? 'Escuro' : 'Claro'}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">Alternar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
