import React, { useMemo } from 'react';
import { marked } from 'marked';

// Configure marked with safe options
marked.setOptions({
  gfm: true,
  breaks: true
});

interface MarkdownViewProps {
  content: string;
  className?: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content, className = '' }) => {
  const html = useMemo(() => {
    try {
      return marked.parse(content || '') as string;
    } catch (e) {
      console.error('Markdown parse error:', e);
      return content;
    }
  }, [content]);

  return (
    <div
      className={`text-zinc-900 dark:text-zinc-100 text-[13.5px] sm:text-[14px] leading-relaxed 
        [&_p]:my-1 [&_p]:text-zinc-900 dark:[&_p]:text-zinc-100 
        [&_strong]:font-semibold [&_strong]:text-black dark:[&_strong]:text-white 
        [&_em]:italic [&_em]:text-zinc-800 dark:[&_em]:text-zinc-200
        [&_ul]:my-1.5 [&_ul]:pl-4 [&_ul]:list-disc [&_li]:my-0.5 [&_li]:text-zinc-900 dark:[&_li]:text-zinc-100
        [&_ol]:my-1.5 [&_ol]:pl-4 [&_ol]:list-decimal
        [&_code]:bg-zinc-100 dark:[&_code]:bg-zinc-800 [&_code]:text-zinc-900 dark:[&_code]:text-zinc-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-[12px]
        [&_blockquote]:border-l-2 [&_blockquote]:border-zinc-400 dark:[&_blockquote]:border-zinc-600 [&_blockquote]:pl-2.5 [&_blockquote]:italic
        ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
