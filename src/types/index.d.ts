export type Category = 'church' | 'family' | 'studies' | 'personal';

export interface NotesEntry {
  id: number;
  date: string;
  category: Category;
  title: string;
  content: string;
}

export type NewNoteEntry = Omit<NotesEntry, 'id'>;
