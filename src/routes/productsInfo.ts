import express from 'express';
import * as phoneInfoController from '../controller/phoneInfo';

export const router = express.Router();

router.get('/:productId', phoneInfoController.getOne)

router.post('/', phoneInfoController.addProductInfo)
router.delete('/:productId', phoneInfoController.removeProductInfo)
