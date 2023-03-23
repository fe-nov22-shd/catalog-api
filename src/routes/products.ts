import express from 'express';
import * as phoneController from '../controller/products';

export const router = express.Router();

router.get('/phones', phoneController.getAll);
router.get('/tablets', phoneController.getAll);

router.get('/hotprice', phoneController.getHotPrice);
router.get('/brand-new', phoneController.getBrandNew);
router.get('/:productId', phoneController.getOne);

router.post('/relevant', phoneController.getSimilarGoods);
router.post('/', phoneController.addProduct);

router.delete('/:productId', phoneController.removeProduct);


