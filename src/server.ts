import express from 'express';
import cors from 'cors';

import { router as productRouter } from './routes/products'
import { router as productInfoRouter } from './routes/productsInfo'
import { router as docuRouter } from './routes/documentstion'
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.use('/', express.json(), docuRouter);

app.use('/products', express.json(), productRouter);
app.use('/products/info', express.json(), productInfoRouter);


app.listen(5700);
