import { Request, Response } from 'express';
import * as productsService from '../services/products';
import { ProductResponse } from '../types/ProductResponse';
import { handlerSort } from '../utils/handlerSort';
import { handlerPagination } from '../utils/handlerPagination';
import {handlerFilter} from '../utils/handlerFilter';

export const getAll = async (req: Request, res: Response) => {
    const products = await productsService.getAll();

    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

    const path = normalizedURL.pathname;

    let productsByCategory = products.filter(product => {
        if (path.includes('phones')){
            return product.categoryId === 1
        }
        if (path.includes('tablets')){
            return product.categoryId === 2
        }
    });

    const sortType = normalizedURL.searchParams.get('sort');
    const currentPage = normalizedURL.searchParams.get('page');
    const itemsPerPage = normalizedURL.searchParams.get('perPage');
    const query = normalizedURL.searchParams.get('query');

    if (query) {
        productsByCategory = handlerFilter(query, products);
    }

    const amount = productsByCategory.length;

    if (sortType) {
        handlerSort(sortType, productsByCategory);
    }

    if (currentPage && itemsPerPage) {
        productsByCategory = handlerPagination(+currentPage,+itemsPerPage, productsByCategory);
    }

    res.send({
        amount,
        productsByCategory,
    });
}

export const getOne = async (req: Request, res: Response) => {
    const { productId } = req.params;

    const foundPhone = await productsService.getById(productId);

    if (!foundPhone) {
        res.sendStatus(404);

        return;
    }

    res.send(foundPhone);
}


export const addProduct = async (req: Request, res: Response) => {
    const ProductFromRequest: ProductResponse = req.body;
    const ProductFromRequestSize = Object.keys(ProductFromRequest).length;

    if (ProductFromRequestSize !== 12) {
        res.sendStatus(422);
        return;
    }

    try {
        const product = await productsService.addProduct(ProductFromRequest);
        res.status(201);
        res.send(product);
    } catch (error: any) {
        res.send(error.message)
    }

}

export const removeProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;

    const foundProduct = await productsService.getById(productId);

    if (!foundProduct) {
        res.sendStatus(404);
        return;
    }

    await productsService.removeProduct(productId);
    res.sendStatus(204);
}

export const getSimilarGoods = async (req: Request, res: Response) => {
    const products = await productsService.getAll();
    const { productId } = req.body;
    const good = await productsService.getById(productId);

    let productsByCategory = products.filter(product => product.categoryId === good?.categoryId);

    productsByCategory = productsByCategory.filter((prod) => {
        if (prod.price > good!.price - 200  && prod.price < good!.price + 200 && good!.id !== prod.id) {
            return prod;
    }});

    productsByCategory = productsByCategory.slice(0, 8);

    res.send(productsByCategory);
}

export const getHotPrice = async (req: Request, res: Response) => {
    let products = await productsService.getAll();

    const phonesWithDiscount = products.map(product => {
        const discountAmount = product.fullPrice - product.price
        return ({...product, discountAmount})
    })
    const sortedPhonesWithDiscount = phonesWithDiscount.sort((a, b) => b.discountAmount - a.discountAmount)

    res.send(sortedPhonesWithDiscount.slice(0, 15));
}

export const getBrandNew = async (req: Request, res: Response) => {
    let products = await productsService.getAll();

    const yearsOfRealise = products
        .map((product) => product.year)
        .sort((a, b) => b - a);

    const brandNewPhones = products.filter(product => product.year === yearsOfRealise[0] )

    res.send(brandNewPhones);
}
