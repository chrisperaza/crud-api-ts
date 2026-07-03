import express from 'express';
import indexRouter from './routes/indexRoutes';

const app = express();
app.use(express.json());
const PORT = 3000;

//app.get('/', (_req, res) => {
//  res.send('Main route');
//});

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
