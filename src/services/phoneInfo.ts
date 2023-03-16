import { PhoneInfo } from "../models/PhoneInfo";
import { PhoneInfoResponse } from "../types/PhoneInfoResponse";

export const getById = async (phoneId: string) => {
    return PhoneInfo.findByPk(phoneId);
}

export const addPhoneInfo = async (date: PhoneInfoResponse) => {
    return PhoneInfo.create({
        ...date
    });
}

export const removePhoneInfo = async (phoneId: string) => {
    await PhoneInfo.destroy({
        where: {
            id: phoneId,
        }
    })
}
