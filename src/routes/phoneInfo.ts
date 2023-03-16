import express from 'express';
import * as phoneInfoController from '../controller/phoneInfo';

export const router = express.Router();

router.get('/:phoneId', phoneInfoController.getOne)

router.post('/', phoneInfoController.addPhoneInfo)
router.delete('/:phoneId', phoneInfoController.removePhone)
