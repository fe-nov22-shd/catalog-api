import { ProductInfo } from "../models/ProductInfo";
import { PhoneInfoResponse } from "../types/PhoneInfoResponse";

export const getById = async (phoneId: string) => {
    return ProductInfo.findByPk(phoneId);
}

export const addProductInfo = async (date: PhoneInfoResponse) => {
    return ProductInfo.create({
        ...date
    });
}

export const removeProductInfo = async (productId: string) => {
    await ProductInfo.destroy({
        where: {
            id: productId,
        }
    })
}
