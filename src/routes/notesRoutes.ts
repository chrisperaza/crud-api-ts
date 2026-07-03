import express from 'express';
const router = express.Router();
import * as notesController from '../controllers/notesController';

/*** get all notes ***/
router.get('/', (_req, res) => {
  res.status(200).json(notesController.getAllNotes());
});

//router.post('/', (_req, res) => {
//  res.send('Saving a note...');
//});

export default router;
