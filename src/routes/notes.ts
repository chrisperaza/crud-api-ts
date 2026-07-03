import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Fetching all entry notes...');
});

router.post('/', (_req, res) => {
  res.send('Saving a note...');
});

export default router;
