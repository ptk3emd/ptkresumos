import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEYS = {
  OVERRIDES: 'clinica_cell_overrides_v1',
  NOTES: 'clinica_cell_notes_v1',
  HIDDEN: 'clinica_hidden_cells_v1',
  BOOKMARKS: 'clinica_bookmarks_v1',
  STUDIED: 'clinica_studied_topics_v1',
  VIEW_MODE: 'clinica_view_mode_v1',
  LAST_TOPIC: 'clinica_last_topic_v1',
  THEME: 'clinica_theme_v1'
};

function safeGetJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.error(`Error loading ${key} from localStorage:`, e);
    return fallback;
  }
}

function safeSetJSON<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
}

export function useClinicalStorage() {
  const [overrides, setOverrides] = useState<Record<string, string>>(() =>
    safeGetJSON(STORAGE_KEYS.OVERRIDES, {})
  );
  const [notes, setNotes] = useState<Record<string, string>>(() =>
    safeGetJSON(STORAGE_KEYS.NOTES, {})
  );
  const [hiddenCells, setHiddenCells] = useState<string[]>(() =>
    safeGetJSON(STORAGE_KEYS.HIDDEN, [])
  );
  const [bookmarks, setBookmarks] = useState<string[]>(() =>
    safeGetJSON(STORAGE_KEYS.BOOKMARKS, [])
  );
  const [studiedTopics, setStudiedTopics] = useState<string[]>(() =>
    safeGetJSON(STORAGE_KEYS.STUDIED, [])
  );
  const [viewMode, setViewModeState] = useState<'single' | 'all'>(() =>
    safeGetJSON(STORAGE_KEYS.VIEW_MODE, 'single')
  );
  const [activeTopicId, setActiveTopicIdState] = useState<string>(() =>
    safeGetJSON(STORAGE_KEYS.LAST_TOPIC, '1.1')
  );
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme class to documentElement and body
  useEffect(() => {
    const isDark = theme === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body?.classList.add('dark');
      document.body?.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.body?.classList.remove('dark');
      document.body?.setAttribute('data-theme', 'light');
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  // Persist states
  useEffect(() => {
    safeSetJSON(STORAGE_KEYS.OVERRIDES, overrides);
  }, [overrides]);

  useEffect(() => {
    safeSetJSON(STORAGE_KEYS.NOTES, notes);
  }, [notes]);

  useEffect(() => {
    safeSetJSON(STORAGE_KEYS.HIDDEN, hiddenCells);
  }, [hiddenCells]);

  useEffect(() => {
    safeSetJSON(STORAGE_KEYS.BOOKMARKS, bookmarks);
  }, [bookmarks]);

  useEffect(() => {
    safeSetJSON(STORAGE_KEYS.STUDIED, studiedTopics);
  }, [studiedTopics]);

  const setViewMode = useCallback((mode: 'single' | 'all') => {
    setViewModeState(mode);
    safeSetJSON(STORAGE_KEYS.VIEW_MODE, mode);
  }, []);

  const setActiveTopicId = useCallback((id: string) => {
    setActiveTopicIdState(id);
    safeSetJSON(STORAGE_KEYS.LAST_TOPIC, id);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  // Cell actions
  const toggleHideCell = useCallback((cellId: string) => {
    setHiddenCells(prev => {
      if (prev.includes(cellId)) {
        return prev.filter(id => id !== cellId);
      } else {
        return [...prev, cellId];
      }
    });
  }, []);

  const hideAllInList = useCallback((cellIds: string[]) => {
    setHiddenCells(prev => Array.from(new Set([...prev, ...cellIds])));
  }, []);

  const revealAllInList = useCallback((cellIds: string[]) => {
    const toRemove = new Set(cellIds);
    setHiddenCells(prev => prev.filter(id => !toRemove.has(id)));
  }, []);

  const revealAllGlobally = useCallback(() => {
    setHiddenCells([]);
  }, []);

  const setCellOverride = useCallback((cellId: string, content: string) => {
    setOverrides(prev => ({ ...prev, [cellId]: content }));
  }, []);

  const resetCellOverride = useCallback((cellId: string) => {
    setOverrides(prev => {
      const copy = { ...prev };
      delete copy[cellId];
      return copy;
    });
  }, []);

  const setCellNote = useCallback((cellId: string, noteText: string) => {
    setNotes(prev => {
      if (!noteText.trim()) {
        const copy = { ...prev };
        delete copy[cellId];
        return copy;
      }
      return { ...prev, [cellId]: noteText };
    });
  }, []);

  const toggleBookmark = useCallback((topicId: string) => {
    setBookmarks(prev =>
      prev.includes(topicId) ? prev.filter(id => id !== topicId) : [...prev, topicId]
    );
  }, []);

  const toggleStudiedTopic = useCallback((topicId: string) => {
    setStudiedTopics(prev =>
      prev.includes(topicId) ? prev.filter(id => id !== topicId) : [...prev, topicId]
    );
  }, []);

  const exportData = useCallback(() => {
    const payload = {
      exportDate: new Date().toISOString(),
      overrides,
      notes,
      hiddenCells,
      bookmarks,
      studiedTopics
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resumo_clinica_medica_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [overrides, notes, hiddenCells, bookmarks, studiedTopics]);

  const importData = useCallback((jsonString: string) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.overrides && typeof data.overrides === 'object') {
        setOverrides(data.overrides);
      }
      if (data.notes && typeof data.notes === 'object') {
        setNotes(data.notes);
      }
      if (Array.isArray(data.hiddenCells)) {
        setHiddenCells(data.hiddenCells);
      }
      if (Array.isArray(data.bookmarks)) {
        setBookmarks(data.bookmarks);
      }
      if (Array.isArray(data.studiedTopics)) {
        setStudiedTopics(data.studiedTopics);
      }
      return { success: true };
    } catch (e) {
      console.error('Import error:', e);
      return { success: false, error: 'Arquivo JSON inválido' };
    }
  }, []);

  const resetAllData = useCallback(() => {
    setOverrides({});
    setNotes({});
    setHiddenCells([]);
    setBookmarks([]);
    setStudiedTopics([]);
    localStorage.removeItem(STORAGE_KEYS.OVERRIDES);
    localStorage.removeItem(STORAGE_KEYS.NOTES);
    localStorage.removeItem(STORAGE_KEYS.HIDDEN);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    localStorage.removeItem(STORAGE_KEYS.STUDIED);
  }, []);

  return {
    overrides,
    notes,
    hiddenCells: new Set(hiddenCells),
    hiddenCount: hiddenCells.length,
    notesCount: Object.keys(notes).length,
    overridesCount: Object.keys(overrides).length,
    bookmarks: new Set(bookmarks),
    studiedTopics: new Set(studiedTopics),
    studiedCount: studiedTopics.length,
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
  };
}
