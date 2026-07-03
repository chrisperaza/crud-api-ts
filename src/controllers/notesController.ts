import { NewNoteEntry, NotesEntry, UpdateNoteEntry } from '../types';
import notesData from './notesData.json';

const notes: Array<NotesEntry> = notesData as Array<NotesEntry>;

/****************************/
/*** GET ALL NOTES ***/
/****************************/
export const getAllNotes = () => notes;

/****************************/
/*** GET A SINGLE NOTE BY ID ***/
/****************************/
export const getSingleNoteById = (id: number): NotesEntry | undefined => {
  const resultNote = notes.find((n) => n.id == id);
  return resultNote;
};

/****************************/
/*** CREATE NOTE ***/
/****************************/
export const createNote = (newNoteEntry: NewNoteEntry): NotesEntry => {
  const newNote = {
    id: notes.length + 1,
    ...newNoteEntry,
  };

  notes.push(newNote);

  return newNote;
};

/****************************/
/*** UPDATE NOTE ***/
/****************************/
export const updateNote = (
  id: number,
  updatedFields: UpdateNoteEntry,
): NotesEntry | undefined => {
  const noteIndex = notes.findIndex((n) => n.id == id);

  if (noteIndex == -1) {
    return undefined;
  }

  const { id: _ignoredId, ...safeFieldsToUpdate } = updatedFields as any;

  notes[noteIndex] = {
    ...notes[noteIndex],
    ...safeFieldsToUpdate,
  };

  return notes[noteIndex];
};
