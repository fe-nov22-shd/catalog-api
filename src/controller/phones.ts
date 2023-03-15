import { Request, Response } from 'express';
import * as phonesService from '../services/phones';
import {PhoneResponse} from "../types/PhoneResponse";

export const getAll = async (req: Request, res: Response) => {
    const phones = await phonesService.getAll();

    res.send(phones);
}

export const getOne = async (req: Request, res: Response) => {
    const { phoneId } = req.params;

    if (isNaN(+phoneId)) {
        res.sendStatus(422);
        return;
    }

    const foundPhone = await phonesService.getById(+phoneId);

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

    const foundPhone = await phonesService.getById(+phoneId);

    if (!foundPhone) {
        res.sendStatus(404);
        return;
    }

    await phonesService.removePhone(+phoneId);
    res.sendStatus(204);
}
