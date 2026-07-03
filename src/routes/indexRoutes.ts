import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Index route');
});

router.post('/', (_req, res) => {
  res.send('Saving a note...');
});

export default router;
