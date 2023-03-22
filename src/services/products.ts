import { Product } from "../models/Product";
import { PhoneResponse } from "../types/PhoneResponse";

export const getAll = async () => {
    return Product.findAll();
}

export const getById = async (phoneId: string) => {
    return Product.findOne(
        {
            where: { phoneId: phoneId },
        }
    );
}

export const addPhone = async (date: PhoneResponse) => {
    return Product.create({
       ...date
    });
}

export const removePhone = async (phoneId: string) => {
    await Product.destroy({
        where: {
            phoneId: phoneId,
        }
    })
}

