import express from 'express';
const router = express.Router();
import * as notesRoutes from '../controllers/notesController';

/*** get all notes ***/
router.get('/', (_req, res) => {
  res.send(Buffer.from(JSON.stringify(notesRoutes.getAllNotes())));
});

//router.post('/', (_req, res) => {
//  res.send('Saving a note...');
//});

export default router;
