import React from 'react';
import { Bookmark, Eye, EyeOff, Info, ArrowUp, CheckCircle2, Bell } from 'lucide-react';
import { Chapter, MedicalTopic, TopicReminder } from '../types/clinical';
import { MedicalTableView } from './MedicalTableView';
import { formatDueStatus, isReminderDue } from '../utils/reviewUtils';

interface AllTopicsViewProps {
  chapters: Chapter[];
  filteredTopics: MedicalTopic[];
  searchQuery: string;
  overrides: Record<string, string>;
  notes: Record<string, string>;
  hiddenCells: Set<string>;
  bookmarks: Set<string>;
  studiedTopics: Set<string>;
  reminders?: Record<string, TopicReminder>;
  onToggleBookmark: (topicId: string) => void;
  onToggleStudied: (topicId: string) => void;
  onToggleHideCell: (cellId: string) => void;
  onHideAllInList: (cellIds: string[]) => void;
  onRevealAllInList: (cellIds: string[]) => void;
  onSaveOverride: (cellId: string, content: string) => void;
  onResetOverride: (cellId: string) => void;
  onSaveNote: (cellId: string, note: string) => void;
  onSwitchToSingleTopic: (topicId: string) => void;
  onOpenScheduleReview?: (topicId: string) => void;
}

export const AllTopicsView: React.FC<AllTopicsViewProps> = ({
  chapters,
  filteredTopics,
  searchQuery,
  overrides,
  notes,
  hiddenCells,
  bookmarks,
  studiedTopics,
  reminders = {},
  onToggleBookmark,
  onToggleStudied,
  onToggleHideCell,
  onHideAllInList,
  onRevealAllInList,
  onSaveOverride,
  onResetOverride,
  onSaveNote,
  onSwitchToSingleTopic,
  onOpenScheduleReview
}) => {
  const filteredTopicIds = new Set(filteredTopics.map(t => t.id));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 animate-fadeIn relative pb-10">
      {chapters.map(chapter => {
        const chapterTopics = chapter.topics.filter(t => filteredTopicIds.has(t.id));
        if (chapterTopics.length === 0) return null;

        const totalInChapter = chapter.topics.length;
        const studiedInChapter = chapter.topics.filter(t => studiedTopics.has(t.id)).length;
        const chapterPercent = Math.round((studiedInChapter / totalInChapter) * 100);

        return (
          <section
            key={chapter.id}
            id={`chapter-${chapter.id}`}
            className="space-y-4 pt-3 border-t first:border-t-0 border-zinc-200 dark:border-zinc-800"
          >
            {/* Chapter Header */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-zinc-900 dark:border-zinc-100">
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {chapter.title}
                </h2>

                {/* Chapter Progress Badge */}
                <div
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-850 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-750 tabular-nums"
                  title={`${studiedInChapter} de ${totalInChapter} temas revisados neste capítulo`}
                >
                  <CheckCircle2 className="w-3 h-3 text-zinc-900 dark:text-zinc-100 shrink-0" />
                  <span>{studiedInChapter}/{totalInChapter} revisados</span>
                  <span className="text-[10px] text-zinc-400">({chapterPercent}%)</span>
                </div>
              </div>

              {chapter.note && (
                <div className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border-l-2 border-zinc-800 dark:border-zinc-200 rounded-r text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{chapter.note}</p>
                </div>
              )}
            </div>

            {/* Chapter Topics */}
            <div className="space-y-5">
              {chapterTopics.map(topic => {
                const isBookmarked = bookmarks.has(topic.id);
                const isStudied = studiedTopics.has(topic.id);
                const topicReminder = reminders[topic.id];
                const isDue = topicReminder ? isReminderDue(topicReminder.dueDate) : false;
                const topicDueStatus = topicReminder ? formatDueStatus(topicReminder.dueDate) : null;

                // Collect content cells for knowledge check in this topic
                const topicContentCellIds = topic.tables.flatMap(t =>
                  t.rows.flatMap(r =>
                    r.cells
                      .map((_, colIdx) => `${r.id}-c${colIdx}`)
                      .filter((_, colIdx) => colIdx > 0)
                  )
                );

                const hiddenCount = topicContentCellIds.filter(id => hiddenCells.has(id)).length;
                const areAllHidden =
                  topicContentCellIds.length > 0 && hiddenCount === topicContentCellIds.length;

                return (
                  <div
                    key={topic.id}
                    id={`topic-${topic.id}`}
                    className={`p-3.5 sm:p-4 rounded-lg border transition-colors shadow-2xs space-y-2.5 ${
                      isStudied
                        ? 'bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700'
                        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {/* Topic Header (Mobile First) */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                          {topic.title}
                        </h3>
                        {isStudied && (
                          <span className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] font-bold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                            Revisado
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Review Reminder Button */}
                        {onOpenScheduleReview && (
                          <button
                            type="button"
                            onClick={() => onOpenScheduleReview(topic.id)}
                            className={`flex items-center gap-1 px-2 py-0.5 text-xs rounded border transition-colors cursor-pointer ${
                              isDue
                                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-bold shadow-2xs'
                                : topicReminder
                                  ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700 font-medium'
                                  : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:text-black dark:hover:text-white'
                            }`}
                            title={
                              topicReminder
                                ? `Revisão: ${topicDueStatus?.label}. Clique para gerenciar.`
                                : 'Agendar lembrete de revisão de acompanhamento'
                            }
                          >
                            <Bell className={`w-3 h-3 ${topicReminder ? 'fill-current' : ''}`} />
                            <span className="hidden sm:inline">
                              {isDue ? 'Revisar hoje' : topicReminder ? topicDueStatus?.badgeLabel : 'Revisar'}
                            </span>
                          </button>
                        )}

                        {/* Studied / Completed Button */}
                        <button
                          type="button"
                          onClick={() => onToggleStudied(topic.id)}
                          className={`flex items-center gap-1 px-2 py-0.5 text-xs rounded border transition-colors ${
                            isStudied
                              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold'
                              : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:text-black dark:hover:text-white'
                          }`}
                          title={isStudied ? 'Desmarcar tema como concluído' : 'Marcar tema como concluído'}
                        >
                          <CheckCircle2 className={`w-3 h-3 ${isStudied ? 'fill-current' : ''}`} />
                          <span className="hidden sm:inline">{isStudied ? 'Concluído' : 'Concluir'}</span>
                        </button>

                        {/* Focus / Single View Button */}
                        <button
                          type="button"
                          onClick={() => onSwitchToSingleTopic(topic.id)}
                          className="px-2 py-0.5 text-xs text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 transition-colors"
                          title="Estudar este tema individualmente"
                        >
                          Focar
                        </button>

                        {/* Bookmark Button */}
                        <button
                          type="button"
                          onClick={() => onToggleBookmark(topic.id)}
                          className={`p-1 rounded border transition-colors ${
                            isBookmarked
                              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100'
                              : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:text-black dark:hover:text-white'
                          }`}
                          title={isBookmarked ? 'Remover dos favoritos' : 'Favoritar'}
                        >
                          <Bookmark className={`w-3 h-3 ${isBookmarked ? 'fill-current' : ''}`} />
                        </button>

                        {/* Hide All in topic toggle */}
                        <button
                          type="button"
                          onClick={() => {
                            if (areAllHidden) {
                              onRevealAllInList(topicContentCellIds);
                            } else {
                              onHideAllInList(topicContentCellIds);
                            }
                          }}
                          className={`flex items-center gap-1 px-2 py-0.5 text-xs rounded border transition-colors ${
                            areAllHidden
                              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-medium'
                              : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100'
                          }`}
                          title="Modo teste de memória para este tema"
                        >
                          {areAllHidden ? (
                            <>
                              <Eye className="w-3 h-3" />
                              <span className="hidden sm:inline">Revelar</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3" />
                              <span className="hidden sm:inline">Teste</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Topic Note if any */}
                    {topic.note && (
                      <div className="p-2 bg-zinc-50 dark:bg-zinc-800 border-l-2 border-zinc-700 dark:border-zinc-300 text-xs text-zinc-700 dark:text-zinc-300 rounded-r">
                        {topic.note}
                      </div>
                    )}

                    {/* Tables */}
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
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Floating Scroll to Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-20 flex items-center justify-center p-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full shadow-sm hover:bg-black dark:hover:white text-xs transition-colors"
        title="Voltar ao topo"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};
