import { NotesEntry } from '../types';
import notesData from './notes.json';

const notes: Array<NotesEntry> = notesData as Array<NotesEntry>;

export const getNotes = () => notes;

export const addNotes = () => null;
