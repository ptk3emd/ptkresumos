import React, { useState } from 'react';
import { X, Search, Bookmark, ChevronRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { allChapters, allTopics } from '../data/allChapters';

interface TableOfContentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTopicId: string;
  onSelectTopic: (topicId: string) => void;
  bookmarks: Set<string>;
  onToggleBookmark: (topicId: string) => void;
  studiedTopics: Set<string>;
  onToggleStudied: (topicId: string) => void;
  notes: Record<string, string>;
}

export const TableOfContentsDrawer: React.FC<TableOfContentsDrawerProps> = ({
  isOpen,
  onClose,
  activeTopicId,
  onSelectTopic,
  bookmarks,
  onToggleBookmark,
  studiedTopics,
  onToggleStudied
}) => {
  const [filterText, setFilterText] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarks' | 'studied' | 'pending'>('all');

  if (!isOpen) return null;

  const totalTopics = allTopics.length;
  const studiedCount = studiedTopics.size;
  const pendingCount = Math.max(0, totalTopics - studiedCount);
  const overallPercent = totalTopics > 0 ? Math.round((studiedCount / totalTopics) * 100) : 0;
  const normalizedFilter = filterText.toLowerCase().trim();

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div
        className="w-full max-w-sm sm:max-w-md bg-white dark:bg-zinc-950 h-full shadow-2xl flex flex-col border-l border-zinc-200 dark:border-zinc-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-3.5 sm:p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
            <h2 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
              Índice de Capítulos
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Global Progress Indicator Box */}
        <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Progresso de Revisão</span>
            </span>
            <span className="tabular-nums font-mono text-[11.5px]">
              {studiedCount}/{totalTopics} ({overallPercent}%)
            </span>
          </div>
          <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ease-out"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        {/* Tab Switcher & Search */}
        <div className="p-3 border-b border-zinc-200 dark:border-zinc-800 space-y-2 bg-white dark:bg-zinc-950">
          <div className="grid grid-cols-4 gap-1 p-0.5 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`py-1 px-1 rounded text-center transition-colors truncate text-[11px] ${
                activeTab === 'all'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('studied')}
              className={`py-1 px-1 rounded text-center transition-colors truncate text-[11px] ${
                activeTab === 'studied'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Revisados ({studiedCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pending')}
              className={`py-1 px-1 rounded text-center transition-colors truncate text-[11px] ${
                activeTab === 'pending'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Pendentes ({pendingCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('bookmarks')}
              className={`py-1 px-1 rounded text-center transition-colors truncate text-[11px] ${
                activeTab === 'bookmarks'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Favoritos ({bookmarks.size})
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
              placeholder="Filtrar por nome do tema..."
              className="w-full pl-8 pr-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100"
            />
          </div>
        </div>

        {/* List of Chapters & Topics */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {allChapters.map(chapter => {
            let matchingTopics = chapter.topics;
            if (activeTab === 'bookmarks') {
              matchingTopics = matchingTopics.filter(t => bookmarks.has(t.id));
            } else if (activeTab === 'studied') {
              matchingTopics = matchingTopics.filter(t => studiedTopics.has(t.id));
            } else if (activeTab === 'pending') {
              matchingTopics = matchingTopics.filter(t => !studiedTopics.has(t.id));
            }

            if (normalizedFilter) {
              matchingTopics = matchingTopics.filter(t =>
                t.title.toLowerCase().includes(normalizedFilter) ||
                t.id.toLowerCase().includes(normalizedFilter)
              );
            }

            if (matchingTopics.length === 0) return null;

            const chapterStudied = chapter.topics.filter(t => studiedTopics.has(t.id)).length;

            return (
              <div key={chapter.id} className="space-y-1">
                <div className="px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                  <span>{chapter.title}</span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    {chapterStudied}/{chapter.topics.length}
                  </span>
                </div>

                <div className="space-y-0.5">
                  {matchingTopics.map(topic => {
                    const isActive = topic.id === activeTopicId;
                    const isBookmarked = bookmarks.has(topic.id);
                    const isStudied = studiedTopics.has(topic.id);

                    return (
                      <div
                        key={topic.id}
                        className={`group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                          isActive
                            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                            : isStudied
                            ? 'bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-850'
                            : 'hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200'
                        }`}
                      >
                        {/* Checkbox button to mark studied directly */}
                        <button
                          type="button"
                          onClick={e => {
                            e.stopPropagation();
                            onToggleStudied(topic.id);
                          }}
                          className={`p-1 mr-1 rounded transition-colors ${
                            isStudied
                              ? isActive
                                ? 'text-white dark:text-zinc-900'
                                : 'text-zinc-900 dark:text-zinc-100'
                              : isActive
                              ? 'text-zinc-400 dark:text-zinc-600'
                              : 'text-zinc-300 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-300'
                          }`}
                          title={isStudied ? 'Desmarcar como estudado' : 'Marcar como estudado/revisado'}
                          aria-label={isStudied ? 'Desmarcar como estudado' : 'Marcar como estudado'}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isStudied ? 'fill-current' : ''}`} />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            onSelectTopic(topic.id);
                            onClose();
                          }}
                          className="flex items-center gap-2 flex-1 text-left truncate mr-2"
                        >
                          <span
                            className={`font-mono text-[10.5px] shrink-0 ${
                              isActive ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-400'
                            }`}
                          >
                            {topic.id}
                          </span>
                          <span className="truncate">{topic.title.replace(/^\d+(\.\d+)?\s*/, '')}</span>
                        </button>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={e => {
                              e.stopPropagation();
                              onToggleBookmark(topic.id);
                            }}
                            className={`p-1 rounded transition-colors ${
                              isBookmarked
                                ? isActive
                                  ? 'text-white dark:text-zinc-900'
                                  : 'text-zinc-900 dark:text-zinc-100'
                                : isActive
                                ? 'text-zinc-400 dark:text-zinc-600'
                                : 'text-zinc-300 hover:text-zinc-600 dark:hover:text-zinc-300'
                            }`}
                            title={isBookmarked ? 'Remover favorito' : 'Favoritar'}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                          </button>

                          <ChevronRight
                            className={`w-3.5 h-3.5 ${
                              isActive ? 'text-white dark:text-zinc-900' : 'text-zinc-300 dark:text-zinc-700'
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
