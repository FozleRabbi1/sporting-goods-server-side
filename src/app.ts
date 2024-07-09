import express, { Application, Request, Response } from 'express';
import core from 'cors';
import router from './app/routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(core());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('server running successfully');
});

export default app;
