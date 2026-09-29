import React, { useState, useMemo, useEffect } from 'react';
import { allChapters, allTopics, findTopicById } from './data/allChapters';
import { useClinicalStorage } from './hooks/useClinicalStorage';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { SingleTopicView } from './components/SingleTopicView';
import { AllTopicsView } from './components/AllTopicsView';
import { TableOfContentsDrawer } from './components/TableOfContentsDrawer';
import { BackupModal } from './components/BackupModal';
import { GoogleSheetsModal } from './components/GoogleSheetsModal';
import { StudyTimer } from './components/StudyTimer';
import {
  BookOpen,
  SearchX,
  EyeOff,
  Database,
  ArrowRight,
  Minimize2
} from 'lucide-react';

export default function App() {
  const {
    overrides,
    notes,
    hiddenCells,
    hiddenCount,
    notesCount,
    overridesCount,
    bookmarks,
    studiedTopics,
    studiedCount,
    viewMode,
    setViewMode,
    activeTopicId,
    setActiveTopicId,
    theme,
    toggleTheme,
    toggleHideCell,
    hideAllInList,
    revealAllInList,
    revealAllGlobally,
    setCellOverride,
    resetCellOverride,
    setCellNote,
    toggleBookmark,
    toggleStudiedTopic,
    exportData,
    importData,
    resetAllData
  } = useClinicalStorage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isBackupOpen, setIsBackupOpen] = useState(false);
  const [isSheetsOpen, setIsSheetsOpen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Exit focus mode with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFocusMode) {
        setIsFocusMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocusMode]);

  const toggleFocusMode = () => {
    setIsFocusMode(prev => {
      const next = !prev;
      if (next && viewMode !== 'single') {
        setViewMode('single');
      }
      return next;
    });
  };

  // Filter topics based on search query and chapter filter
  const filteredTopics = useMemo(() => {
    let result = allTopics;

    // Filter by Chapter
    if (selectedChapterId !== null) {
      result = result.filter(t => t.chapterId === selectedChapterId);
    }

    // Filter by Search Query
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(topic => {
        // Match title or chapter
        if (topic.title.toLowerCase().includes(q)) return true;
        if (topic.chapterTitle.toLowerCase().includes(q)) return true;
        if (topic.id.toLowerCase().includes(q)) return true;

        // Match table rows/cells
        for (const table of topic.tables) {
          if (table.subheading && table.subheading.toLowerCase().includes(q)) return true;
          for (const row of table.rows) {
            for (let c = 0; c < row.cells.length; c++) {
              const cellId = `${row.id}-c${c}`;
              const text = overrides[cellId] ?? row.cells[c];
              if (text.toLowerCase().includes(q)) return true;
              const note = notes[cellId];
              if (note && note.toLowerCase().includes(q)) return true;
            }
          }
        }
        return false;
      });
    }

    return result;
  }, [searchQuery, selectedChapterId, overrides, notes]);

  // Current topic in Single Mode
  const currentTopic = useMemo(() => {
    // If the activeTopicId is in the filtered list, use it
    const active = findTopicById(activeTopicId);
    if (filteredTopics.some(t => t.id === activeTopicId) && active) {
      return active;
    }
    // Otherwise fallback to first filtered topic if any, or active
    return filteredTopics[0] || active || allTopics[0];
  }, [activeTopicId, filteredTopics]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors selection:bg-zinc-300 selection:text-black dark:selection:bg-zinc-700 dark:selection:text-white">
      {/* Discreet floating exit button when in Zen / Focus Mode */}
      {isFocusMode ? (
        <div className="fixed top-3 right-3 sm:top-4 sm:right-6 z-50 animate-fadeIn">
          <button
            type="button"
            onClick={() => setIsFocusMode(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/90 hover:bg-black text-white dark:bg-zinc-100/90 dark:hover:bg-white dark:text-zinc-900 backdrop-blur rounded-lg text-xs font-semibold shadow-lg transition-all opacity-80 hover:opacity-100"
            title="Sair do Modo Zen (Esc)"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Sair do Modo Zen</span>
            <kbd className="hidden sm:inline ml-1 px-1 py-0.2 text-[9px] bg-white/20 dark:bg-black/20 rounded font-mono">
              ESC
            </kbd>
          </button>
        </div>
      ) : (
        <Header
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onOpenToc={() => setIsTocOpen(true)}
          onOpenBackup={() => setIsBackupOpen(true)}
          onOpenSheets={() => setIsSheetsOpen(true)}
          onToggleFocusMode={toggleFocusMode}
          theme={theme}
          onToggleTheme={toggleTheme}
          hiddenCount={hiddenCount}
          onRevealAllGlobally={revealAllGlobally}
          notesCount={notesCount}
          studiedCount={studiedCount}
          totalTopics={allTopics.length}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-6 py-3.5 sm:py-6 space-y-4 sm:space-y-6">
        {/* Dynamic Search & Filter Bar (hidden in Focus Mode) */}
        {!isFocusMode && (
          <section aria-label="Busca e filtros">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedChapterId={selectedChapterId}
              onSelectChapter={setSelectedChapterId}
              totalMatches={filteredTopics.length}
              totalTopics={allTopics.length}
            />
          </section>
        )}

        {/* Global Test Knowledge Alert Bar (hidden in Focus Mode) */}
        {!isFocusMode && hiddenCount > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs text-zinc-900 dark:text-zinc-100 shadow-2xs">
            <div className="flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-zinc-800 dark:text-zinc-200 shrink-0" />
              <span>
                <strong>Modo Teste de Conhecimento ativo:</strong> Você tem{' '}
                <span className="font-bold underline">
                  {hiddenCount} {hiddenCount === 1 ? 'célula ocultada' : 'células ocultadas'}
                </span>{' '}
                para testar sua memória.
              </span>
            </div>
            <button
              type="button"
              onClick={revealAllGlobally}
              className="px-3 py-1 bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold transition-colors shadow-2xs"
            >
              Revelar todas as respostas
            </button>
          </div>
        )}

        {/* Search Results / Content Display */}
        {filteredTopics.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3">
            <SearchX className="w-8 h-8 text-zinc-400 mx-auto" />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Nenhum tema encontrado
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
              Não encontramos resultados para &ldquo;{searchQuery}&rdquo;. Tente buscar por nomes genéricos de doenças, fármacos ou sintomas.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedChapterId(null);
              }}
              className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-lg text-xs font-medium transition-colors"
            >
              Limpar busca e filtros
            </button>
          </div>
        ) : viewMode === 'single' ? (
          <div className="space-y-6">
            {/* If searching in single mode, show quick matching list pill carousel */}
            {!isFocusMode && searchQuery && filteredTopics.length > 1 && (
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                  Temas que coincidem com sua pesquisa ({filteredTopics.length}):
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                  {filteredTopics.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTopicId(t.id)}
                      className={`px-2.5 py-1 text-xs rounded-md border text-left transition-colors flex items-center gap-1 ${
                        t.id === currentTopic.id
                          ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold'
                          : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100'
                      }`}
                    >
                      <span>{t.title}</span>
                      <ArrowRight className="w-3 h-3 shrink-0 opacity-70" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Single Topic Component */}
            <SingleTopicView
              topic={currentTopic}
              onSelectTopic={setActiveTopicId}
              overrides={overrides}
              notes={notes}
              hiddenCells={hiddenCells}
              isBookmarked={bookmarks.has(currentTopic.id)}
              onToggleBookmark={() => toggleBookmark(currentTopic.id)}
              isStudied={studiedTopics.has(currentTopic.id)}
              onToggleStudied={() => toggleStudiedTopic(currentTopic.id)}
              isFocusMode={isFocusMode}
              onToggleFocusMode={toggleFocusMode}
              onToggleHideCell={toggleHideCell}
              onHideAllInList={hideAllInList}
              onRevealAllInList={revealAllInList}
              onSaveOverride={setCellOverride}
              onResetOverride={resetCellOverride}
              onSaveNote={setCellNote}
            />
          </div>
        ) : (
          /* All Topics Sequential View */
          <AllTopicsView
            chapters={allChapters}
            filteredTopics={filteredTopics}
            searchQuery={searchQuery}
            overrides={overrides}
            notes={notes}
            hiddenCells={hiddenCells}
            bookmarks={bookmarks}
            studiedTopics={studiedTopics}
            onToggleBookmark={toggleBookmark}
            onToggleStudied={toggleStudiedTopic}
            onToggleHideCell={toggleHideCell}
            onHideAllInList={hideAllInList}
            onRevealAllInList={revealAllInList}
            onSaveOverride={setCellOverride}
            onResetOverride={resetCellOverride}
            onSaveNote={setCellNote}
            onSwitchToSingleTopic={topicId => {
              setActiveTopicId(topicId);
              setViewMode('single');
            }}
          />
        )}
      </main>

      {/* Footer (hidden in Focus Mode) */}
      {!isFocusMode && (
        <footer className="mt-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-6 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="max-w-xl leading-relaxed">
              Uma tabela por tema, com os tópicos relevantes para cada doença ou quadro. Siglas aparecem após o termo por extenso. Doses e valores são orientativos: confirme em diretrizes atualizadas.
            </p>
            <div className="flex items-center gap-3 text-[11.5px] text-zinc-600 dark:text-zinc-400 shrink-0">
              <span>{allTopics.length} temas clínicos</span>
              <span aria-hidden="true">·</span>
              <span>Salvamento local ativo</span>
            </div>
          </div>
        </footer>
      )}

      {/* Table of Contents Drawer */}
      <TableOfContentsDrawer
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        activeTopicId={currentTopic.id}
        onSelectTopic={id => {
          setActiveTopicId(id);
          setViewMode('single');
        }}
        bookmarks={bookmarks}
        onToggleBookmark={toggleBookmark}
        studiedTopics={studiedTopics}
        onToggleStudied={toggleStudiedTopic}
        notes={notes}
      />

      {/* Backup and Local Storage Modal */}
      <BackupModal
        isOpen={isBackupOpen}
        onClose={() => setIsBackupOpen(false)}
        notesCount={notesCount}
        overridesCount={overridesCount}
        bookmarksCount={bookmarks.size}
        studiedCount={studiedCount}
        onExport={exportData}
        onImport={importData}
        onResetAll={resetAllData}
      />

      {/* Google Sheets Integration Modal */}
      <GoogleSheetsModal
        isOpen={isSheetsOpen}
        onClose={() => setIsSheetsOpen(false)}
        allTopics={allTopics}
        currentTopic={viewMode === 'single' ? currentTopic : undefined}
        overrides={overrides}
        notes={notes}
        studiedTopics={studiedTopics}
      />
    </div>
  );
}
