import express from 'express';
const router = express.Router();
import * as notesController from '../controllers/notesController';

/*** get all notes ***/
router.get('/', (_req, res) => {
  res.send(notesController.getAllNotes());
});

/*** get a single note by id ***/
router.get('/:id', (req, res) => {
  const noteResult = notesController.getSingleNoteById(Number(req.params.id));
  return noteResult != null ? res.send(noteResult) : res.sendStatus(404);
});

/*** create note ***/
router.post('/', (req, res) => {
  const { date, category, title, content } = req.body;

  const newNote = notesController.createNote({
    date,
    category,
    title,
    content,
  });

  res.json(newNote);
});

/*** edit note ***/
router.put('/:id', (req, res) => {
  const noteId = Number(req.params.id);
  const updatedFields = req.body;

  const updatedNote = notesController.updateNote(noteId, updatedFields);

  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.sendStatus(404);
  }
});

/*** delete note ***/
router.delete('/:id', (req, res) => {
  const noteId = Number(req.params.id);

  const deletedNote = notesController.deleteNote(noteId);

  if (deletedNote) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

export default router;
