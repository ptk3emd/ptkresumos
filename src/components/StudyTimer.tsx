import React, { useState, useRef, useEffect } from 'react';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Clock,
  Flame,
  X
} from 'lucide-react';
import { useStudyTimer, TimerMode } from '../hooks/useStudyTimer';

export const StudyTimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    mode,
    timeLeft,
    formattedTime,
    isRunning,
    formattedTotalActiveStudyTime,
    completedPomodoros,
    progressPercent,
    startTimer,
    pauseTimer,
    resetCurrentInterval,
    switchMode,
    skipInterval,
    resetSessionStats
  } = useStudyTimer();

  // Close popover when clicking or tapping outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const getModeLabel = (m: TimerMode) => {
    switch (m) {
      case 'focus':
        return 'Foco (25m)';
      case 'shortBreak':
        return 'Pausa (5m)';
      case 'longBreak':
        return 'Longa (15m)';
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Header Button / Pill Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-xs transition-all ${
          isRunning
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs'
            : isOpen
            ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700'
            : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-800'
        }`}
        title={`Pomodoro: ${formattedTime} (${mode === 'focus' ? 'Foco' : 'Pausa'}) · Estudo ativo nesta sessão: ${formattedTotalActiveStudyTime}`}
        aria-label="Temporizador de estudo Pomodoro"
      >
        <span className="relative flex items-center justify-center">
          <Timer className="w-3.5 h-3.5 shrink-0" />
          {isRunning && (
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-ping" />
          )}
        </span>

        {/* Monospace countdown timer */}
        <span className="font-mono font-semibold tracking-tight text-[11px] sm:text-xs tabular-nums">
          {formattedTime}
        </span>

        {/* Session active indicator on larger screens */}
        {completedPomodoros > 0 && (
          <span className="hidden md:inline-flex items-center gap-0.5 text-[10px] opacity-75 font-sans font-medium pl-0.5 border-l border-current/20">
            <Flame className="w-2.5 h-2.5 fill-current" />
            <span>{completedPomodoros}</span>
          </span>
        )}
      </button>

      {/* Popover Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm z-50 animate-fadeIn text-zinc-900 dark:text-zinc-100 space-y-4">
          {/* Header of popover */}
          <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-zinc-800 dark:text-zinc-200">
              <Clock className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
              <span>Temporizador de Estudo</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-black dark:hover:text-white p-0.5 rounded"
              aria-label="Fechar temporizador"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Mode Switcher Segmented Control */}
          <div className="grid grid-cols-3 p-0.5 bg-zinc-100 dark:bg-zinc-850 rounded-lg text-xs font-medium">
            {(['focus', 'shortBreak', 'longBreak'] as TimerMode[]).map(m => (
              <button
                key={m}
                type="button"
                onClick={() => switchMode(m)}
                className={`py-1 px-1 rounded-md text-[11px] transition-colors text-center truncate ${
                  mode === m
                    ? 'bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-semibold shadow-2xs'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {getModeLabel(m)}
              </button>
            ))}
          </div>

          {/* Timer Display Area */}
          <div className="text-center py-2 space-y-1.5">
            <div className="text-4xl font-bold font-mono tracking-tight text-zinc-900 dark:text-zinc-100 tabular-nums">
              {formattedTime}
            </div>
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              {mode === 'focus' ? 'Sessão de Foco Clínico' : 'Intervalo para Descanso'}
            </div>

            {/* Linear Progress Bar */}
            <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={resetCurrentInterval}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Reiniciar intervalo atual"
              aria-label="Reiniciar intervalo atual"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={isRunning ? pauseTimer : startTimer}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 ${
                isRunning
                  ? 'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
                  : 'bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 shadow-xs'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Iniciar Foco</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={skipInterval}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Avançar para o próximo intervalo"
              aria-label="Avançar para o próximo intervalo"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Session Cumulative Stats Section */}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                Estudo ativo nesta sessão:
              </span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {formattedTotalActiveStudyTime}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                Ciclos concluídos:
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                  {completedPomodoros} {completedPomodoros === 1 ? 'ciclo' : 'ciclos'}
                </span>
                {completedPomodoros > 0 && (
                  <div className="flex gap-0.5">
                    {Array.from({ length: Math.min(completedPomodoros, 4) }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Reset Session Option */}
            {(completedPomodoros > 0 || formattedTotalActiveStudyTime !== '0 min') && (
              <div className="pt-1 flex justify-end">
                <button
                  type="button"
                  onClick={resetSessionStats}
                  className="text-[10px] text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:underline"
                >
                  Zerar métricas da sessão
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
