import { Request, Response } from 'express';
import * as phonesService from '../services/phones';
import { PhoneResponse } from "../types/PhoneResponse";
import { handlerSort } from "../utils/handlerSort";
import { handlerPagination } from "../utils/handlerPagination";
import { Phone } from '../models/Phone';

import { IsNull } from 'sequelize-typescript';

export const getAll = async (req: Request, res: Response) => {
    let phones = await phonesService.getAll();
    const amount = phones.length;

    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

    const sortType = normalizedURL.searchParams.get('sort');
    const currentPage = normalizedURL.searchParams.get('page');
    const itemsPerPage = normalizedURL.searchParams.get('perPage');

    if (sortType) {
        handlerSort(sortType, phones);
    }

    if (currentPage && itemsPerPage) {
        phones = handlerPagination(+currentPage,+itemsPerPage, phones);
    }

    res.send({
        amount,
        phones,
    });
}

export const getOne = async (req: Request, res: Response) => {
    const { phoneId } = req.params;

    const foundPhone = await phonesService.getById(phoneId);

    if (!foundPhone) {
        res.sendStatus(404);

        return;
    }

    res.send(foundPhone);
}

export const addPhone = async (req: Request, res: Response) => {
    const PhoneFromRequest: PhoneResponse = req.body;
    const PhoneFromRequestSize = Object.keys(PhoneFromRequest).length;

    if (PhoneFromRequestSize !== 12) {
        res.sendStatus(422);
        return;
    }

    const phone = await phonesService.addPhone(PhoneFromRequest);

    res.status(201);
    res.send(phone);
}

export const removePhone = async (req: Request, res: Response) => {
    const { phoneId } = req.params;

    const foundPhone = await phonesService.getById(phoneId);

    if (!foundPhone) {
        res.sendStatus(404);
        return;
    }

    await phonesService.removePhone(phoneId);
    res.sendStatus(204);
}
export const getSimilarGoods = async (req: Request, res: Response) => {
    let phones = await phonesService.getAll();
    const { phoneId } = req.body;
    const good = await phonesService.getById(phoneId);

    phones = phones.filter((phone) => {
        if (phone.price > good!.price - 200  && phone.price < good!.price + 200 && good!.id !== phone.id) {
            return phone;
    }});

    phones = phones.slice(0, 8);

    res.send(phones);
}

export const getHotPrice = async (req: Request, res: Response) => {
    let phones = await phonesService.getAll();

    const phoneswithDiscount = phones.map(phone => {
        const discountAmount = phone.fullPrice - phone.price
        return ({...phone, discountAmount})
    })
    const sortedPhoneswithDiscount = phoneswithDiscount.sort((a, b) => b.discountAmount - a.discountAmount)

    res.send(sortedPhoneswithDiscount.slice(0, 15));
}

export const getBrandNew = async (req: Request, res: Response) => {
    let phones = await phonesService.getAll();

    const yearsOfRealise = phones
        .map((phone) => phone.year)
        .sort((a, b) => b - a);    
    
    const brandNewPhones = phones.filter(phone => phone.year === yearsOfRealise[0] )

    res.send(brandNewPhones);
}
