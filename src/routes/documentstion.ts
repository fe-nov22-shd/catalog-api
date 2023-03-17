import express from 'express';
import * as docksController from '../controller/documentation';

export const router = express.Router();

router.get('/', docksController.getDocumentationPage);


