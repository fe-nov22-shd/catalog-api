import express from 'express';
import cors from 'cors';

import { router as phonesRouter } from './routes/phones'
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.use('/phones', express.json(), phonesRouter);

app.listen(3000);
