import express from 'express';
import * as phoneController from '../controller/phones';

export const router = express.Router();

router.get('/', phoneController.getAll);
router.get('/:phoneId', phoneController.getOne)

router.post('/', phoneController.addPhone)
router.delete('/:phoneId', phoneController.removePhone)

