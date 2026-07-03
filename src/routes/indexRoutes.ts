import express from 'express';
import * as notesRoutes from '../services/notesRoutes';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Index route');
});

router.get('/notes', (_req, res) => {
  res.send(Buffer.from(JSON.stringify(notesRoutes.getNotes())));
});

router.post('/', (_req, res) => {
  res.send('Saving a note...');
});

export default router;
