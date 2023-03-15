import { Phone } from "../models/Phone";
import { PhoneResponse } from "../types/PhoneResponse";

export const getAll = async () => {
    return Phone.findAll();
}

export const getById = async (phoneId: number) => {
    return Phone.findByPk(phoneId);
}

export const addPhone = async (date: PhoneResponse) => {
    return Phone.create({
       ...date
    });
}

export const removePhone = async (phoneId: number) => {
    await Phone.destroy({
        where: {
            id: phoneId,
        }
    })
}
