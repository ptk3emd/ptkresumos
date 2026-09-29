import { useState, useEffect, useRef, useCallback } from 'react';

export type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

const MODE_DURATIONS: Record<TimerMode, number> = {
  focus: 25 * 60, // 25 minutes
  shortBreak: 5 * 60, // 5 minutes
  longBreak: 15 * 60 // 15 minutes
};

const SESSION_STORAGE_KEY_TIME = 'clinica_session_study_seconds_v1';
const SESSION_STORAGE_KEY_POMODOROS = 'clinica_session_pomodoros_v1';

export function useStudyTimer() {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState<number>(MODE_DURATIONS.focus);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Total active focus time during current session (in seconds)
  const [totalActiveStudySeconds, setTotalActiveStudySeconds] = useState<number>(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_STORAGE_KEY_TIME);
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });

  // Completed pomodoro focus cycles
  const [completedPomodoros, setCompletedPomodoros] = useState<number>(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_STORAGE_KEY_POMODOROS);
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Play subtle chime on interval completion
  const playNotificationSound = useCallback(() => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const playTone = (freq: number, start: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      };

      // Two-tone gentle harmonic chime
      playTone(523.25, 0, 0.25); // C5
      playTone(659.25, 0.2, 0.4); // E5
    } catch {
      // Audio autoplay policy fallback
    }
  }, []);

  // Save session metrics whenever they change
  useEffect(() => {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY_TIME, totalActiveStudySeconds.toString());
      sessionStorage.setItem(SESSION_STORAGE_KEY_POMODOROS, completedPomodoros.toString());
    } catch {
      // Ignore sessionStorage issues in restricted iframes
    }
  }, [totalActiveStudySeconds, completedPomodoros]);

  // Main countdown ticker
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Timer finished
            playNotificationSound();
            setIsRunning(false);

            if (mode === 'focus') {
              // Add to completed pomodoro count
              setCompletedPomodoros(c => c + 1);
              // Switch automatically to short break suggestion
              setMode('shortBreak');
              return MODE_DURATIONS.shortBreak;
            } else {
              // Break finished, return to focus
              setMode('focus');
              return MODE_DURATIONS.focus;
            }
          }
          return prev - 1;
        });

        // If in focus mode, accumulate active study time
        if (mode === 'focus') {
          setTotalActiveStudySeconds(s => s + 1);
        }
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, mode, playNotificationSound]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);

  const resetCurrentInterval = () => {
    setIsRunning(false);
    setTimeLeft(MODE_DURATIONS[mode]);
  };

  const switchMode = (newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(MODE_DURATIONS[newMode]);
  };

  const skipInterval = () => {
    setIsRunning(false);
    if (mode === 'focus') {
      switchMode('shortBreak');
    } else {
      switchMode('focus');
    }
  };

  const resetSessionStats = () => {
    setTotalActiveStudySeconds(0);
    setCompletedPomodoros(0);
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY_TIME);
      sessionStorage.removeItem(SESSION_STORAGE_KEY_POMODOROS);
    } catch {
      // Ignore
    }
  };

  // Helper formatting: mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Helper formatting for total study time: e.g. "45m" or "1h 15m"
  const formatTotalStudyTime = (totalSeconds: number) => {
    const totalMinutes = Math.floor(totalSeconds / 60);
    if (totalMinutes < 60) {
      return `${totalMinutes} min`;
    }
    const hours = Math.floor(totalMinutes / 60);
    const remainingMins = totalMinutes % 60;
    return `${hours}h ${remainingMins}m`;
  };

  const totalDuration = MODE_DURATIONS[mode];
  const progressPercent = Math.round(((totalDuration - timeLeft) / totalDuration) * 100);

  return {
    mode,
    timeLeft,
    formattedTime: formatTime(timeLeft),
    isRunning,
    totalActiveStudySeconds,
    formattedTotalActiveStudyTime: formatTotalStudyTime(totalActiveStudySeconds),
    completedPomodoros,
    progressPercent,
    startTimer,
    pauseTimer,
    resetCurrentInterval,
    switchMode,
    skipInterval,
    resetSessionStats
  };
}
