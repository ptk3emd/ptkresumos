export interface TopicReminder {
  topicId: string;
  dueDate: string; // YYYY-MM-DD format
  scheduledAt: string; // ISO date string
  intervalDays?: number;
  lastReviewedAt?: string;
}

export function getTodayDateString(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function addDaysToDate(days: number, fromDateStr = getTodayDateString()): string {
  const [y, m, d] = fromDateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDaysDifference(dueDateStr: string, fromDateStr = getTodayDateString()): number {
  const [dy, dm, dd] = dueDateStr.split('-').map(Number);
  const [fy, fm, fd] = fromDateStr.split('-').map(Number);
  const due = new Date(dy, dm - 1, dd).getTime();
  const from = new Date(fy, fm - 1, fd).getTime();
  return Math.round((due - from) / (1000 * 60 * 60 * 24));
}

export function isReminderDue(dueDateStr: string): boolean {
  return dueDateStr <= getTodayDateString();
}

export function formatDueStatus(dueDateStr: string): {
  label: string;
  badgeLabel: string;
  isDue: boolean;
  isOverdue: boolean;
  isToday: boolean;
  daysDiff: number;
  formattedDate: string;
} {
  const daysDiff = getDaysDifference(dueDateStr);
  const [year, month, day] = dueDateStr.split('-');
  const formattedDate = `${day}/${month}/${year}`;

  const isDue = daysDiff <= 0;
  const isToday = daysDiff === 0;
  const isOverdue = daysDiff < 0;

  let label: string;
  let badgeLabel: string;

  if (isToday) {
    label = 'Revisar hoje';
    badgeLabel = 'Hoje';
  } else if (isOverdue) {
    const absDays = Math.abs(daysDiff);
    label = `Atrasado há ${absDays} ${absDays === 1 ? 'dia' : 'dias'}`;
    badgeLabel = `${absDays}d atrasado`;
  } else if (daysDiff === 1) {
    label = 'Amanhã';
    badgeLabel = 'Amanhã';
  } else {
    label = `Em ${daysDiff} dias (${formattedDate})`;
    badgeLabel = `Em ${daysDiff}d`;
  }

  return {
    label,
    badgeLabel,
    isDue,
    isOverdue,
    isToday,
    daysDiff,
    formattedDate
  };
}
