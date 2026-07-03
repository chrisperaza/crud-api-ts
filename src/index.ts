import express from 'express';
import noteRouter from './routes/notes';

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Main route');
});

app.use('/api/notes', noteRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
