import { Chapter, MedicalTopic } from '../types/clinical';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';
import { chapter7 } from './chapter7';
import { chapter8 } from './chapter8';
import { chapter9 } from './chapter9';

export const allChapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9
];

export const allTopics: MedicalTopic[] = allChapters.flatMap(c => c.topics);

export function findTopicById(id: string): MedicalTopic | undefined {
  return allTopics.find(t => t.id === id);
}

export function getAdjacentTopics(currentId: string): { prev?: MedicalTopic; next?: MedicalTopic } {
  const index = allTopics.findIndex(t => t.id === currentId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? allTopics[index - 1] : undefined,
    next: index < allTopics.length - 1 ? allTopics[index + 1] : undefined
  };
}
