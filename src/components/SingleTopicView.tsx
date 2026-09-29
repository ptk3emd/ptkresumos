import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Eye,
  EyeOff,
  Info,
  CheckCircle2,
  Maximize2,
  Minimize2,
  BookOpen,
  Layers
} from 'lucide-react';
import { MedicalTopic } from '../types/clinical';
import { MedicalTableView } from './MedicalTableView';
import { getAdjacentTopics, allTopics } from '../data/allChapters';

interface SingleTopicViewProps {
  topic: MedicalTopic;
  onSelectTopic: (topicId: string) => void;
  overrides: Record<string, string>;
  notes: Record<string, string>;
  hiddenCells: Set<string>;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isStudied: boolean;
  onToggleStudied: () => void;
  isFocusMode?: boolean;
  onToggleFocusMode?: () => void;
  onToggleHideCell: (cellId: string) => void;
  onHideAllInList: (cellIds: string[]) => void;
  onRevealAllInList: (cellIds: string[]) => void;
  onSaveOverride: (cellId: string, content: string) => void;
  onResetOverride: (cellId: string) => void;
  onSaveNote: (cellId: string, note: string) => void;
}

export const SingleTopicView: React.FC<SingleTopicViewProps> = ({
  topic,
  onSelectTopic,
  overrides,
  notes,
  hiddenCells,
  isBookmarked,
  onToggleBookmark,
  isStudied,
  onToggleStudied,
  isFocusMode = false,
  onToggleFocusMode,
  onToggleHideCell,
  onHideAllInList,
  onRevealAllInList,
  onSaveOverride,
  onResetOverride,
  onSaveNote
}) => {
  const { prev, next } = getAdjacentTopics(topic.id);

  // Collect all content cell IDs in this topic
  const allTopicContentCellIds = topic.tables.flatMap(t =>
    t.rows.flatMap(r =>
      r.cells
        .map((_, colIdx) => `${r.id}-c${colIdx}`)
        .filter((_, colIdx) => colIdx > 0)
    )
  );

  const hiddenInTopicCount = allTopicContentCellIds.filter(id => hiddenCells.has(id)).length;
  const areAllTopicCellsHidden =
    allTopicContentCellIds.length > 0 && hiddenInTopicCount === allTopicContentCellIds.length;

  const handleToggleTopicHidden = () => {
    if (areAllTopicCellsHidden) {
      onRevealAllInList(allTopicContentCellIds);
    } else {
      onHideAllInList(allTopicContentCellIds);
    }
  };

  const currentIndex = allTopics.findIndex(t => t.id === topic.id);

  return (
    <article className="space-y-4 animate-fadeIn">
      {/* Stepper Navigation Bar (Hidden in Zen / Focus Mode) */}
      {!isFocusMode && (
        <div className="flex items-center justify-between gap-1.5 p-1.5 sm:p-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs">
          <button
            type="button"
            onClick={() => prev && onSelectTopic(prev.id)}
            disabled={!prev}
            className={`flex items-center justify-center gap-1 min-h-[36px] px-2.5 py-1.5 rounded-md font-medium transition-colors ${
              prev
                ? 'text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700'
                : 'text-zinc-300 dark:text-zinc-700 cursor-not-allowed opacity-40'
            }`}
            title="Tópico anterior"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Center: Dropdown selector */}
          <div className="flex items-center gap-1 truncate text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
            <span className="shrink-0">{currentIndex + 1}/{allTopics.length}</span>
            <select
              value={topic.id}
              onChange={e => onSelectTopic(e.target.value)}
              className="px-2 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-xs font-semibold text-zinc-900 dark:text-zinc-100 max-w-[140px] sm:max-w-xs truncate focus:outline-none"
            >
              {allTopics.map(t => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => next && onSelectTopic(next.id)}
            disabled={!next}
            className={`flex items-center justify-center gap-1 min-h-[36px] px-2.5 py-1.5 rounded-md font-medium transition-colors ${
              next
                ? 'text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700'
                : 'text-zinc-300 dark:text-zinc-700 cursor-not-allowed opacity-40'
            }`}
            title="Próximo tópico"
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Topic Card Header (Hidden in Zen / Focus Mode) */}
      {!isFocusMode && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3">
          {/* Top Meta Bar & Action Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-2 border-b border-zinc-100 dark:border-zinc-800/80">
            {/* Chapter Breadcrumb & Table count */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-750">
                <BookOpen className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
                <span>{topic.chapterTitle}</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-50 dark:bg-zinc-850 text-zinc-500 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800">
                <Layers className="w-3 h-3" />
                <span>{topic.tables.length} {topic.tables.length === 1 ? 'tabela' : 'tabelas'}</span>
              </div>
            </div>

            {/* Action Toolbar */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {/* Studied / Reviewed button */}
              <button
                type="button"
                onClick={onToggleStudied}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border transition-all ${
                  isStudied
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-2xs'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-750 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                }`}
                title={isStudied ? 'Clique para desmarcar tema como estudado' : 'Marcar tema como estudado / revisado'}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${isStudied ? 'fill-current' : ''}`} />
                <span>{isStudied ? 'Revisado' : 'Marcar revisado'}</span>
              </button>

              {/* Bookmark button */}
              <button
                type="button"
                onClick={onToggleBookmark}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-all ${
                  isBookmarked
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold shadow-2xs'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-750 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700'
                }`}
                title={isBookmarked ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                <span>{isBookmarked ? 'Favorito' : 'Favoritar'}</span>
              </button>

              {/* Test Knowledge (Hide all in topic) */}
              <button
                type="button"
                onClick={handleToggleTopicHidden}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-all ${
                  areAllTopicCellsHidden
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold shadow-2xs'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-750 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                }`}
                title={areAllTopicCellsHidden ? 'Mostrar todas as respostas deste tema' : 'Ocultar respostas deste tema para teste'}
              >
                {areAllTopicCellsHidden ? (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Revelar respostas</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>Modo teste</span>
                  </>
                )}
              </button>

              {/* Focus Mode button */}
              {onToggleFocusMode && (
                <button
                  type="button"
                  onClick={onToggleFocusMode}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-all ${
                    isFocusMode
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold'
                      : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-750 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                  }`}
                  title={isFocusMode ? 'Sair do Modo Zen / Foco (Esc)' : 'Modo Zen: exibe exclusivamente as tabelas sem distrações'}
                >
                  {isFocusMode ? (
                    <>
                      <Minimize2 className="w-3.5 h-3.5" />
                      <span>Sair do foco</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Modo Zen</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Prominent Topic Title */}
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            {topic.title}
          </h1>

          {/* Clinical Note Callout */}
          {topic.note && (
            <div className="flex items-start gap-2.5 p-3 bg-zinc-50 dark:bg-zinc-850/70 border-l-3 border-zinc-900 dark:border-zinc-200 text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 rounded-r-lg">
              <Info className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{topic.note}</p>
            </div>
          )}
        </div>
      )}

      {/* Tables list - strictly tables shown in Zen mode */}
      <div className="space-y-4">
        {topic.tables.map(table => (
          <MedicalTableView
            key={table.id}
            table={table}
            topicTitle={topic.title}
            overrides={overrides}
            notes={notes}
            hiddenCells={hiddenCells}
            onToggleHideCell={onToggleHideCell}
            onHideAllInList={onHideAllInList}
            onRevealAllInList={onRevealAllInList}
            onSaveOverride={onSaveOverride}
            onResetOverride={onResetOverride}
            onSaveNote={onSaveNote}
          />
        ))}
      </div>

      {/* Bottom Nav: Mobile First touch targets */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 pb-8 border-t border-zinc-200 dark:border-zinc-800 text-xs">
        <div className="flex items-center justify-between w-full sm:w-auto gap-2">
          <button
            type="button"
            onClick={() => {
              if (prev) {
                onSelectTopic(prev.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            disabled={!prev}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg font-medium min-h-[40px] transition-colors ${
              prev
                ? 'text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                : 'text-zinc-300 dark:text-zinc-700 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (next) {
                onSelectTopic(next.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            disabled={!next}
            className={`sm:hidden flex items-center gap-1.5 px-3.5 py-2.5 bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold min-h-[40px] transition-colors ${
              !next ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Center: Mark as Studied Toggle */}
        <button
          type="button"
          onClick={onToggleStudied}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border font-semibold min-h-[40px] transition-colors ${
            isStudied
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${isStudied ? 'fill-current' : ''}`} />
          <span>{isStudied ? 'Tema Concluído / Revisado' : 'Marcar Tema como Revisado'}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (next) {
              onSelectTopic(next.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          disabled={!next}
          className={`hidden sm:flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold min-h-[40px] transition-colors ${
            !next ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <span>Próximo Tópico</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
