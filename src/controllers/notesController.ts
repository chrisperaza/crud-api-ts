import { NotesEntry } from '../types';
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
export const createNote = () => null;
