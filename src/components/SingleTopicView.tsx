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
  Layers,
  Bell
} from 'lucide-react';
import { MedicalTopic, TopicReminder } from '../types/clinical';
import { MedicalTableView } from './MedicalTableView';
import { getAdjacentTopics, allTopics } from '../data/allChapters';
import { formatDueStatus, isReminderDue } from '../utils/reviewUtils';

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
  reminder?: TopicReminder;
  onOpenScheduleReview?: () => void;
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
  onSaveNote,
  reminder,
  onOpenScheduleReview
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
  const isDue = reminder ? isReminderDue(reminder.dueDate) : false;
  const dueStatus = reminder ? formatDueStatus(reminder.dueDate) : null;

  return (
    <article className="space-y-4 animate-fadeIn">
      {/* Unified Minimalist Topic Header (Hidden in Zen Mode) */}
      {!isFocusMode && (
        <div className="pb-3 border-b border-zinc-200 dark:border-zinc-800 space-y-2">
          {/* Top Line: Chapter Breadcrumb + Compact Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
              <span className="uppercase tracking-wider font-semibold truncate max-w-[260px] sm:max-w-md">
                {topic.chapterTitle}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="tabular-nums text-zinc-600 dark:text-zinc-300">
                {currentIndex + 1}/{allTopics.length}
              </span>
            </div>

            {/* Compact Minimal Actions & Navigation */}
            <div className="flex flex-wrap items-center gap-1">
              {/* Review / Follow-up Reminder Button */}
              {onOpenScheduleReview && (
                <button
                  type="button"
                  onClick={onOpenScheduleReview}
                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    isDue
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-2xs ring-1 ring-zinc-700 dark:ring-zinc-300'
                      : reminder
                        ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium'
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
                  }`}
                  title={
                    reminder
                      ? `Revisão agendada: ${dueStatus?.label}. Clique para gerenciar.`
                      : 'Agendar lembrete de revisão para este tema'
                  }
                >
                  <Bell className={`w-3.5 h-3.5 ${reminder ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">
                    {isDue ? 'Revisar hoje' : reminder ? dueStatus?.badgeLabel : 'Revisar'}
                  </span>
                </button>
              )}

              {/* Studied / Completed button */}
              <button
                type="button"
                onClick={onToggleStudied}
                className={`flex items-center gap-1 px-2 py-1 text-xs rounded-md transition-colors ${
                  isStudied
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
                }`}
                title={isStudied ? 'Desmarcar como concluído' : 'Marcar tema como concluído'}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${isStudied ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{isStudied ? 'Concluído' : 'Concluir'}</span>
              </button>

              {/* Bookmark button */}
              <button
                type="button"
                onClick={onToggleBookmark}
                className={`p-1.5 rounded-md transition-colors ${
                  isBookmarked
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-600 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
                }`}
                title={isBookmarked ? 'Remover dos favoritos' : 'Favoritar'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              {/* Test Knowledge (Hide all in topic) */}
              <button
                type="button"
                onClick={handleToggleTopicHidden}
                className={`flex items-center gap-1 px-2 py-1 text-xs rounded-md transition-colors ${
                  areAllTopicCellsHidden
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
                }`}
                title={areAllTopicCellsHidden ? 'Mostrar respostas' : 'Ocultar respostas para teste'}
              >
                {areAllTopicCellsHidden ? (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Respostas</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Testar</span>
                  </>
                )}
              </button>

              {/* Zen Mode button */}
              {onToggleFocusMode && (
                <button
                  type="button"
                  onClick={onToggleFocusMode}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850 rounded-md transition-colors"
                  title="Modo Zen (Esc): foco total apenas nas tabelas"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Zen</span>
                </button>
              )}

              <span className="w-px h-3.5 bg-zinc-200 dark:bg-zinc-800 mx-0.5" />

              {/* Quick Prev / Next Steppers */}
              <button
                type="button"
                onClick={() => prev && onSelectTopic(prev.id)}
                disabled={!prev}
                className={`p-1.5 rounded-md transition-colors ${
                  prev
                    ? 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
                    : 'text-zinc-300 dark:text-zinc-700 cursor-not-allowed opacity-30'
                }`}
                title="Tópico anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => next && onSelectTopic(next.id)}
                disabled={!next}
                className={`p-1.5 rounded-md transition-colors ${
                  next
                    ? 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
                    : 'text-zinc-300 dark:text-zinc-700 cursor-not-allowed opacity-30'
                }`}
                title="Próximo tópico"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Topic Main Heading */}
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 pt-0.5">
            {topic.title}
          </h1>

          {/* Clinical Note (if present) */}
          {topic.note && (
            <div className="flex items-start gap-2 p-2.5 bg-zinc-100 dark:bg-zinc-900 border-l-2 border-zinc-900 dark:border-zinc-100 text-xs text-zinc-700 dark:text-zinc-300 rounded-r">
              <Info className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{topic.note}</p>
            </div>
          )}

          {/* Due Review Reminder Banner */}
          {reminder && isDue && (
            <div className="flex items-center justify-between gap-2 p-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg text-xs font-medium shadow-2xs">
              <div className="flex items-center gap-2">
                <Bell className="w-3.5 h-3.5 shrink-0 fill-current" />
                <span>
                  <strong>Revisão de acompanhamento pendente:</strong> Este tema está agendado para revisão ({dueStatus?.label}).
                </span>
              </div>
              {onOpenScheduleReview && (
                <button
                  type="button"
                  onClick={onOpenScheduleReview}
                  className="px-2.5 py-1 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white rounded text-[11px] font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                >
                  Concluir / Adiar
                </button>
              )}
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

      {/* Bottom Nav: Mobile First touch targets (Hidden in Zen Mode) */}
      {!isFocusMode && (
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
      )}
    </article>
  );
};
