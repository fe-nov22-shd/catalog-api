import { Request, Response } from 'express';
import * as phoneInfoService from '../services/phoneInfo';
import { PhoneInfoResponse } from "../types/PhoneInfoResponse";
import {responseDataParser} from "../utils/responseDataParser";
import {requestDataParser} from "../utils/requestDataParser";

export const getOne = async (req: Request, res: Response) => {
    const { phoneId } = req.params;

    const foundPhoneInfo = await phoneInfoService.getById(phoneId);

    if (!foundPhoneInfo) {
        res.sendStatus(404);

        return;
    }

    const dataToResponse = responseDataParser(foundPhoneInfo);

    res.send(dataToResponse);
}


export const addPhoneInfo = async (req: Request, res: Response) => {
    const PhoneInfoFromRequest: PhoneInfoResponse = req.body;
    const PhoneFromRequestSize = Object.keys(PhoneInfoFromRequest).length;

    if (PhoneFromRequestSize !== 18) {
        res.sendStatus(422);
        return;
    }

    const dataToServer = requestDataParser(PhoneInfoFromRequest);

    const phoneInfo = await phoneInfoService.addPhoneInfo(dataToServer);

    const dataToResponse = responseDataParser(phoneInfo);

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
