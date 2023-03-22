import { Phone } from "../models/Phone";
import { PhoneResponse } from "../types/PhoneResponse";

export const getAll = async () => {
    return Phone.findAll();
}

export const getById = async (phoneId: string) => {
    return Phone.findOne(
        {
            where: { phoneId: phoneId },
        }
    );
}

export const addPhone = async (date: PhoneResponse) => {
    return Phone.create({
       ...date
    });
}

export const removePhone = async (phoneId: string) => {
    await Phone.destroy({
        where: {
            phoneId: phoneId,
        }
    })
}

