export interface MedicalTable {
  id: string;
  subheading?: string;
  headers: string[];
  rows: {
    id: string;
    cells: string[];
  }[];
}

export interface MedicalTopic {
  id: string; // e.g. "1.1"
  chapterId: number; // 1 to 9
  chapterTitle: string; // "1. Principais Infecções na Clínica Médica"
  title: string; // "1.1 Pneumonia adquirida na comunidade"
  note?: string; // Optional contextual notes/guidelines
  tables: MedicalTable[];
}

export interface Chapter {
  id: number;
  title: string;
  shortTitle: string;
  iconName: string;
  note?: string;
  topics: MedicalTopic[];
}

export interface TopicReminder {
  topicId: string;
  dueDate: string; // YYYY-MM-DD
  scheduledAt: string; // ISO date string
  intervalDays?: number;
  lastReviewedAt?: string;
}

export interface UserCustomData {
  cellOverrides: Record<string, string>; // cellId -> custom Markdown
  cellNotes: Record<string, string>; // cellId -> notes Markdown
  hiddenCells: string[]; // array of cellIds that are currently masked
  bookmarkedTopics: string[]; // array of topic ids
  reviewReminders?: Record<string, TopicReminder>; // topicId -> TopicReminder
}
