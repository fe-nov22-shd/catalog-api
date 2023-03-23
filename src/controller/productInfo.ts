import { Request, Response } from 'express';
import * as productInfoService from '../services/productsInfo';
import { ProductResponse } from '../types/ProductnfoResponse';
import { responseDataParser } from '../utils/responseDataParser';
import { requestDataParser } from '../utils/requestDataParser';

export const getOne = async (req: Request, res: Response) => {
    const { productId } = req.params;

    const foundProductInfo = await productInfoService.getById(productId);

    if (!foundProductInfo) {
        res.sendStatus(404);

        return;
    }

    const dataToResponse = responseDataParser(foundProductInfo);

    res.send(dataToResponse);
}


export const addProductInfo = async (req: Request, res: Response) => {
    const ProductInfoFromRequest: ProductResponse = req.body;
    const PhoneFromRequestSize = Object.keys(ProductInfoFromRequest).length;

    if (PhoneFromRequestSize !== 18) {
        res.sendStatus(422);
        return;
    }

    const dataToServer = requestDataParser(ProductInfoFromRequest);

    try {
        const productInfo = await productInfoService.addProductInfo(dataToServer);
        const dataToResponse = responseDataParser(productInfo);

        res.status(201);
        res.send(dataToResponse);
    } catch (error: any) {
        res.status(204);
        res.send(error.message);
    }
}

export const removeProductInfo = async (req: Request, res: Response) => {
    const { productId } = req.params;

    const foundProductInfo = await productInfoService.getById(productId);

    if (!foundProductInfo) {
        res.sendStatus(404);
        return;
    }

    await productInfoService.removeProductInfo(productId);
    res.sendStatus(204);
}
