import express from 'express';
import cors from 'cors';

import { router as phonesRouter } from './routes/phones'
import { router as phoneInfoRouter } from './routes/phoneInfo'
import { router as docuRouter } from './routes/documentstion'
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.use('/', express.json(), docuRouter);
app.use('/phones', express.json(), phonesRouter);
app.use('/phones/info', express.json(), phoneInfoRouter);


app.listen(3000);
