import React, { useState, useEffect } from 'react';
import { X, Bell, Calendar, Check, Trash2, Clock, CheckCircle2 } from 'lucide-react';
import { MedicalTopic, TopicReminder } from '../types/clinical';
import { addDaysToDate, formatDueStatus, getTodayDateString } from '../utils/reviewUtils';

interface ReviewScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: MedicalTopic | null;
  reminder?: TopicReminder;
  onSchedule: (topicId: string, daysOrDate: number | string) => void;
  onRemoveReminder: (topicId: string) => void;
  onCompleteReview: (topicId: string, nextInterval?: number) => void;
}

export const ReviewScheduleModal: React.FC<ReviewScheduleModalProps> = ({
  isOpen,
  onClose,
  topic,
  reminder,
  onSchedule,
  onRemoveReminder,
  onCompleteReview
}) => {
  const [customDate, setCustomDate] = useState('');
  const todayStr = getTodayDateString();

  useEffect(() => {
    if (reminder) {
      setCustomDate(reminder.dueDate);
    } else {
      setCustomDate(addDaysToDate(3));
    }
  }, [reminder, isOpen]);

  if (!isOpen || !topic) return null;

  const dueStatus = reminder ? formatDueStatus(reminder.dueDate) : null;

  const handleSelectPreset = (days: number) => {
    onSchedule(topic.id, days);
    onClose();
  };

  const handleCustomDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDate) return;
    onSchedule(topic.id, customDate);
    onClose();
  };

  const handleComplete = (nextDays?: number) => {
    onCompleteReview(topic.id, nextDays);
    onClose();
  };

  const handleRemove = () => {
    onRemoveReminder(topic.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 animate-fadeIn">
      <div
        className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden animate-scaleIn text-zinc-900 dark:text-zinc-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
            <h3 className="font-bold text-sm sm:text-base">Agendar Revisão</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-zinc-600 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Topic Context */}
          <div className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-1">
            <p className="text-[10.5px] uppercase tracking-wider font-semibold text-zinc-600 dark:text-zinc-300">
              {topic.chapterTitle}
            </p>
            <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-50 leading-snug">
              {topic.title}
            </h4>
          </div>

          {/* Current Status Box if scheduled */}
          {reminder && dueStatus && (
            <div
              className={`p-3 rounded-lg border text-xs space-y-2 ${
                dueStatus.isDue
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Status atual:
                </span>
                <span className="font-bold tabular-nums">
                  {dueStatus.label} ({dueStatus.formattedDate})
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleComplete()}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    dueStatus.isDue
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800'
                      : 'bg-zinc-900 text-white hover:bg-black dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Marcar como revisado</span>
                </button>

                <button
                  type="button"
                  onClick={handleRemove}
                  className={`flex items-center gap-1 py-1.5 px-2.5 rounded text-xs transition-colors cursor-pointer ${
                    dueStatus.isDue
                      ? 'text-zinc-300 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                  title="Remover agendamento deste tema"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
          )}

          {/* Quick Schedule Options */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              {reminder ? 'Reagendar para:' : 'Programar lembrete em:'}
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleSelectPreset(1)}
                className="p-2 text-left bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs transition-colors group cursor-pointer"
              >
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Amanhã</div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-300">+1 dia</div>
              </button>

              <button
                type="button"
                onClick={() => handleSelectPreset(3)}
                className="p-2 text-left bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs transition-colors group cursor-pointer"
              >
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Em 3 dias</div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-300">Revisão rápida</div>
              </button>

              <button
                type="button"
                onClick={() => handleSelectPreset(7)}
                className="p-2 text-left bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs transition-colors group cursor-pointer"
              >
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Em 7 dias</div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-300">1 semana</div>
              </button>

              <button
                type="button"
                onClick={() => handleSelectPreset(14)}
                className="p-2 text-left bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs transition-colors group cursor-pointer"
              >
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Em 14 dias</div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-300">2 semanas</div>
              </button>

              <button
                type="button"
                onClick={() => handleSelectPreset(30)}
                className="p-2 text-left bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs transition-colors group cursor-pointer"
              >
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Em 30 dias</div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-300">1 mês</div>
              </button>

              <button
                type="button"
                onClick={() => handleSelectPreset(60)}
                className="p-2 text-left bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs transition-colors group cursor-pointer"
              >
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Em 60 dias</div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-300">2 meses</div>
              </button>
            </div>
          </div>

          {/* Custom Date Form */}
          <form onSubmit={handleCustomDateSubmit} className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Ou escolha uma data específica:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={customDate}
                min={todayStr}
                onChange={e => setCustomDate(e.target.value)}
                required
                className="flex-1 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-900 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
