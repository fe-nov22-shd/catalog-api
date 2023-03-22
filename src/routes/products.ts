import express from 'express';
import * as phoneController from '../controller/products';

export const router = express.Router();

router.get('/phones', phoneController.getAllPhones);
router.get('/tablets', phoneController.getAllTablets);

router.get('/hotprice', phoneController.getHotPrice)
router.get('/brand-new', phoneController.getBrandNew)
router.get('/:productId', phoneController.getOne)

router.post('/relevant', phoneController.getSimilarGoods)
router.post('/', phoneController.addPhone)
router.delete('/:productId', phoneController.removePhone)


