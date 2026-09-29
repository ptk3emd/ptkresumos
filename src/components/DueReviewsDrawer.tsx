import React, { useState } from 'react';
import {
  X,
  Bell,
  Clock,
  CheckCircle2,
  ChevronRight,
  Calendar,
  AlertCircle,
  Plus
} from 'lucide-react';
import { MedicalTopic, TopicReminder } from '../types/clinical';
import { formatDueStatus, isReminderDue } from '../utils/reviewUtils';

interface DueReviewsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  allTopics: MedicalTopic[];
  reminders: Record<string, TopicReminder>;
  onSelectTopic: (topicId: string) => void;
  onCompleteReview: (topicId: string, nextDays?: number) => void;
  onOpenScheduleModal: (topicId: string) => void;
  onRemoveReminder: (topicId: string) => void;
}

export const DueReviewsDrawer: React.FC<DueReviewsDrawerProps> = ({
  isOpen,
  onClose,
  allTopics,
  reminders,
  onSelectTopic,
  onCompleteReview,
  onOpenScheduleModal,
  onRemoveReminder
}) => {
  const [activeTab, setActiveTab] = useState<'due' | 'upcoming' | 'all'>('due');

  if (!isOpen) return null;

  // Map reminders to full topic objects with dueStatus
  const topicsMap = new Map<string, MedicalTopic>(allTopics.map(t => [t.id, t]));

  const scheduledList = Object.values(reminders)
    .map(reminder => {
      const topic = topicsMap.get(reminder.topicId);
      if (!topic) return null;
      const status = formatDueStatus(reminder.dueDate);
      return {
        topic,
        reminder,
        status
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => a.reminder.dueDate.localeCompare(b.reminder.dueDate));

  const dueList = scheduledList.filter(item => item.status.isDue);
  const upcomingList = scheduledList.filter(item => !item.status.isDue);

  const displayList =
    activeTab === 'due' ? dueList : activeTab === 'upcoming' ? upcomingList : scheduledList;

  const handleGoToTopic = (topicId: string) => {
    onSelectTopic(topicId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 animate-fadeIn">
      <div
        className="w-full max-w-sm sm:max-w-md bg-white dark:bg-zinc-950 h-full shadow-none flex flex-col border-l border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
              <Bell className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base leading-tight">
                Lembretes de Revisão
              </h2>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {dueList.length > 0
                  ? `${dueList.length} ${dueList.length === 1 ? 'tópico pendente hoje' : 'tópicos pendentes hoje'}`
                  : 'Nenhum tópico pendente hoje'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Fechar painel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Highlight Banner if topics are due */}
        {dueList.length > 0 && (
          <div className="mx-4 mt-3 p-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                {dueList.length} {dueList.length === 1 ? 'tema para revisar hoje' : 'temas para revisar hoje'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleGoToTopic(dueList[0].topic.id)}
              className="px-2.5 py-1 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white rounded font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Começar →
            </button>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center px-4 pt-3 pb-2 border-b border-zinc-200 dark:border-zinc-800 gap-1 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('due')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'due'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
            }`}
          >
            <span>Pendentes</span>
            {dueList.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-zinc-700 text-zinc-100 dark:bg-zinc-300 dark:text-zinc-900 font-bold tabular-nums">
                {dueList.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'upcoming'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
            }`}
          >
            <span>Próximos</span>
            <span className="text-[10px] text-zinc-400 tabular-nums">
              ({upcomingList.length})
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
            }`}
          >
            <span>Todos ({scheduledList.length})</span>
          </button>
        </div>

        {/* Topics List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {displayList.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 dark:text-zinc-400 space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto text-zinc-400" />
              <p className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                {activeTab === 'due'
                  ? 'Nenhuma revisão pendente para hoje!'
                  : 'Nenhum lembrete nesta categoria.'}
              </p>
              <p className="text-xs max-w-xs mx-auto">
                Para agendar um lembrete, clique no botão <strong>Revisão</strong> presente no cabeçalho de qualquer tópico clínico.
              </p>
            </div>
          ) : (
            displayList.map(({ topic, reminder, status }) => (
              <div
                key={topic.id}
                className={`p-3 rounded-lg border transition-all space-y-2.5 ${
                  status.isDue
                    ? 'bg-zinc-50 dark:bg-zinc-900 border-zinc-400 dark:border-zinc-700 shadow-2xs'
                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {/* Top Chapter & Due Status */}
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <span className="uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 truncate max-w-[200px]">
                    {topic.chapterTitle}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold tabular-nums ${
                      status.isDue
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    {status.label}
                  </span>
                </div>

                {/* Topic Title */}
                <button
                  type="button"
                  onClick={() => handleGoToTopic(topic.id)}
                  className="text-left font-bold text-xs sm:text-sm text-zinc-950 dark:text-zinc-50 hover:underline block leading-snug"
                >
                  {topic.title}
                </button>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-1 gap-1.5 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-1">
                    {/* Mark Done */}
                    <button
                      type="button"
                      onClick={() => onCompleteReview(topic.id)}
                      className="flex items-center gap-1 px-2 py-1 text-[11px] font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-800 dark:text-zinc-200 rounded transition-colors cursor-pointer"
                      title="Marcar revisão como concluída"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Concluir</span>
                    </button>

                    {/* Reschedule / Edit */}
                    <button
                      type="button"
                      onClick={() => onOpenScheduleModal(topic.id)}
                      className="px-2 py-1 text-[11px] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                      title="Alterar data do lembrete"
                    >
                      Reagendar
                    </button>
                  </div>

                  {/* Go to topic button */}
                  <button
                    type="button"
                    onClick={() => handleGoToTopic(topic.id)}
                    className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-zinc-900 text-white hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded transition-colors cursor-pointer"
                  >
                    <span>Estudar</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
          <span>{scheduledList.length} temas agendados no total</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 font-semibold text-zinc-800 dark:text-zinc-200 hover:underline cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
