import express from 'express';
import * as goodController from '../controller/phones';

export const router = express.Router();

router.get('/', goodController.getAll);
router.get('/:phoneId', goodController.getOne)

router.post('/', goodController.addPhone)
router.delete('/:phoneId', goodController.removePhone)
