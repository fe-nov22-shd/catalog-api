import { Request, Response } from 'express';
import * as phoneInfoService from '../services/phoneInfo';
import { PhoneInfoResponse } from "../types/PhoneInfoResponse";

export const getOne = async (req: Request, res: Response) => {
    const { phoneId } = req.params;

    const foundPhoneInfo = await phoneInfoService.getById(phoneId);

    if (!foundPhoneInfo) {
        res.sendStatus(404);

        return;
    }

    const dataToResponse = {
        ...foundPhoneInfo.dataValues,
        capacityAvailable: JSON.parse(foundPhoneInfo.capacityAvailable),
        colorsAvailable: JSON.parse(foundPhoneInfo.colorsAvailable),
        images: JSON.parse(foundPhoneInfo.images),
        description: JSON.parse(foundPhoneInfo.description),
        cell: JSON.parse(foundPhoneInfo.cell),
    }

    res.send(dataToResponse);
}


export const addPhoneInfo = async (req: Request, res: Response) => {
    const PhoneInfoFromRequest: PhoneInfoResponse = req.body;
    const PhoneFromRequestSize = Object.keys(PhoneInfoFromRequest).length;

    if (PhoneFromRequestSize !== 18) {
        res.sendStatus(422);
        return;
    }

    const dataToServer = {
        ...PhoneInfoFromRequest,
        capacityAvailable: JSON.stringify(PhoneInfoFromRequest.capacityAvailable),
        colorsAvailable: JSON.stringify(PhoneInfoFromRequest.colorsAvailable),
        images: JSON.stringify(PhoneInfoFromRequest.images),
        description: JSON.stringify(PhoneInfoFromRequest.description),
        cell: JSON.stringify(PhoneInfoFromRequest.cell),
    }

    const phoneInfo = await phoneInfoService.addPhoneInfo(dataToServer);

    const dataToResponse = {
        ...phoneInfo.dataValues,
        capacityAvailable: JSON.parse(phoneInfo.capacityAvailable),
        colorsAvailable: JSON.parse(phoneInfo.colorsAvailable),
        images: JSON.parse(phoneInfo.images),
        description: JSON.parse(phoneInfo.description),
        cell: JSON.parse(phoneInfo.cell),
    }

    res.status(201);
    res.send(dataToResponse);
}

export const removePhone = async (req: Request, res: Response) => {
    const { phoneId } = req.params;

    const foundPhoneInfo = await phoneInfoService.getById(phoneId);

    if (!foundPhoneInfo) {
        res.sendStatus(404);
        return;
    }

    await phoneInfoService.removePhoneInfo(phoneId);
    res.sendStatus(204);
}
