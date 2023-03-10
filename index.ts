import express, { Express } from 'express';
import cors from 'cors';
import reminders from './routers/reminders';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/reminders', reminders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running at http://localhost:${port}`));