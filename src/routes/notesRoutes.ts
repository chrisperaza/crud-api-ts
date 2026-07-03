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

export default router;
