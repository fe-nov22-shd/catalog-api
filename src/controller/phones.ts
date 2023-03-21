import { Request, Response } from 'express';
import * as phonesService from '../services/phones';
import { PhoneResponse } from "../types/PhoneResponse";
import { handlerSort } from "../utils/handlerSort";
import { handlerPagination } from "../utils/handlerPagination";

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
