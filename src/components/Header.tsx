import React from 'react';
import {
  Sun,
  Moon,
  List,
  Layers,
  Database,
  EyeOff,
  CheckCircle2,
  FileSpreadsheet,
  Maximize2
} from 'lucide-react';
import { StudyTimer } from './StudyTimer';

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
  totalTopics
}) => {
  const studiedPercent = totalTopics > 0 ? Math.round((studiedCount / totalTopics) * 100) : 0;

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        {/* Top Row */}
        <div className="h-13 flex items-center justify-between gap-2">
          {/* Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onOpenToc}
              className="flex items-center gap-2 text-left group"
            >
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 shrink-0 group-hover:scale-125 transition-transform"></span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold text-sm sm:text-base tracking-tight truncate">
                Clínica Médica 2
              </span>
            </button>

            {/* Visual Study Progress Pill */}
            <button
              type="button"
              onClick={onOpenToc}
              className="flex items-center gap-1.5 px-2 py-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 transition-colors group"
              title={`Progresso: ${studiedCount} de ${totalTopics} temas estudados (${studiedPercent}%). Clique para ver no índice.`}
              aria-label={`Progresso: ${studiedCount} de ${totalTopics} temas estudados`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100 shrink-0" />
              <div className="flex items-center gap-1 text-[11px] font-semibold leading-none tabular-nums">
                <span>{studiedCount}/{totalTopics}</span>
                <span className="hidden sm:inline text-zinc-500 dark:text-zinc-400 font-normal text-[10px]">
                  ({studiedPercent}%)
                </span>
              </div>
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1 sm:gap-1.5">
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
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
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
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
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
                title="Clique para revelar todas"
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
              title="Modo Foco: esconde cabeçalho, busca e rodapé para foco total"
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
    </header>
  );
};
