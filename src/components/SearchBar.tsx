import React, { useRef, useEffect, useState } from 'react';
import { Search, X, Clock, History, Trash2, ArrowUpRight } from 'lucide-react';
import { allChapters } from '../data/allChapters';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedChapterId: number | null;
  onSelectChapter: (chapterId: number | null) => void;
  totalMatches: number;
  totalTopics: number;
}

const STORAGE_KEY = 'clinical_tables_recent_searches';
const POPULAR_SUGGESTIONS = [
  'Pneumonia',
  'Sepse',
  'Insuficiência cardíaca',
  'DPOC',
  'Cetoacidose',
  'Meningite'
];

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedChapterId,
  onSelectChapter,
  totalMatches,
  totalTopics
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isInputActive, setIsInputActive] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.slice(0, 5);
        }
      }
    } catch {
      // ignore
    }
    return [];
  });

  // Save to recent searches (up to 5 items, latest first, case-insensitive deduplication)
  const saveToRecentSearches = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;

    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, 5);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleRemoveRecent = (e: React.MouseEvent, termToRemove: string) => {
    e.stopPropagation();
    setRecentSearches(prev => {
      const updated = prev.filter(item => item !== termToRemove);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleClearAllRecents = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentSearches([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleSelectRecent = (term: string) => {
    onSearchChange(term);
    saveToRecentSearches(term);
    setIsInputActive(false);
    inputRef.current?.blur();
  };

  // Click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsInputActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Keyboard shortcut listener (/ to focus, Escape to blur/close)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsInputActive(true);
      } else if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setIsInputActive(false);
        inputRef.current?.blur();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim().length >= 2) {
        saveToRecentSearches(searchQuery);
      }
      setIsInputActive(false);
    } else if (e.key === 'Escape') {
      setIsInputActive(false);
    }
  };

  const hasActiveFilters = searchQuery.trim().length > 0 || selectedChapterId !== null;

  return (
    <div ref={containerRef} className="w-full space-y-2">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <div className="absolute left-3 text-zinc-600 pointer-events-none">
          <Search className="w-4 h-4" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onFocus={() => setIsInputActive(true)}
          onChange={e => onSearchChange(e.target.value)}
          onKeyDown={handleKeyDownInput}
          placeholder="Buscar temas, condutas, fármacos, exames..."
          className="w-full pl-9 pr-8 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              inputRef.current?.focus();
            }}
            className="absolute right-2.5 p-1 text-zinc-600 hover:text-black dark:hover:text-white"
            title="Limpar busca"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Recent Searches Dropdown Popover */}
        {isInputActive && (
          <div className="absolute top-full left-0 right-0 z-40 mt-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm overflow-hidden animate-fadeIn">
            {recentSearches.length > 0 ? (
              <div>
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 dark:bg-zinc-850 border-b border-zinc-100 dark:border-zinc-800 text-[11px]">
                  <div className="flex items-center gap-1.5 font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Buscas Recentes</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleClearAllRecents}
                    className="flex items-center gap-1 text-zinc-600 hover:text-black dark:hover:text-white text-[10.5px] transition-colors"
                    title="Limpar histórico de buscas"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Limpar</span>
                  </button>
                </div>

                {/* List of 5 Recent Searches */}
                <div className="py-1">
                  {recentSearches.map(term => (
                    <div
                      key={term}
                      onClick={() => handleSelectRecent(term)}
                      className="group flex items-center justify-between px-3 py-2 text-xs sm:text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <History className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 shrink-0" />
                        <span className="text-zinc-800 dark:text-zinc-200 truncate font-medium">
                          {term}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 ml-2">
                        <button
                          type="button"
                          onClick={e => handleRemoveRecent(e, term)}
                          className="p-1 rounded text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 opacity-70 group-hover:opacity-100 transition-opacity"
                          title="Remover termo"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Helper footer */}
                <div className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-850 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[10.5px] text-zinc-600">
                  <span>Pressione <kbd className="px-1 py-0.2 bg-zinc-200 dark:bg-zinc-800 rounded font-mono text-[9px] text-zinc-700 dark:text-zinc-300">Enter</kbd> para buscar</span>
                  <span><kbd className="px-1 py-0.2 bg-zinc-200 dark:bg-zinc-800 rounded font-mono text-[9px] text-zinc-700 dark:text-zinc-300">Esc</kbd> para fechar</span>
                </div>
              </div>
            ) : (
              <div className="p-3 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Sugestões rápidas</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_SUGGESTIONS.map(sugg => (
                    <button
                      key={sugg}
                      type="button"
                      onClick={() => handleSelectRecent(sugg)}
                      className="flex items-center gap-1 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md text-xs transition-colors"
                    >
                      <span>{sugg}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chapter Filter Pills (Horizontal Scrollable) */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs scrollbar-none">
        <button
          type="button"
          onClick={() => onSelectChapter(null)}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap text-xs transition-colors shrink-0 ${
            selectedChapterId === null
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
              : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
          }`}
        >
          Todos ({totalTopics})
        </button>

        {allChapters.map(chapter => (
          <button
            key={chapter.id}
            type="button"
            onClick={() => onSelectChapter(selectedChapterId === chapter.id ? null : chapter.id)}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap text-xs transition-colors shrink-0 ${
              selectedChapterId === chapter.id
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850'
            }`}
          >
            {chapter.id}. {chapter.shortTitle}
          </button>
        ))}
      </div>

      {/* Active filter results line */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between text-[11px] text-zinc-600 dark:text-zinc-300 px-0.5">
          <span>
            {totalMatches} {totalMatches === 1 ? 'resultado' : 'resultados'}
          </span>
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              onSelectChapter(null);
            }}
            className="hover:text-black dark:hover:text-white underline"
          >
            Limpar filtro
          </button>
        </div>
      )}
    </div>
  );
};
