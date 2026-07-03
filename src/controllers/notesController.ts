import { NotesEntry } from '../types';
import notesData from './notesData.json';

const notes: Array<NotesEntry> = notesData as Array<NotesEntry>;

/****************************/
/*** GET ALL NOTES ***/
/****************************/
export const getAllNotes = () => notes;

/****************************/
/*** CREATE NOTE ***/
/****************************/
export const createNote = () => null;
