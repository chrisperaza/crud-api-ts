import express from 'express';
const router = express.Router();
import notesRouter from './notesRoutes';

router.get('/', (_req, res) => {
  res.send('Index route');
});

router.use('/notes', notesRouter);

export default router;
