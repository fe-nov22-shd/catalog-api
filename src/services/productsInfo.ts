import { ProductInfo } from "../models/ProductInfo";
import { ProductResponse } from "../types/ProductnfoResponse";

export const getById = async (phoneId: string) => {
    return ProductInfo.findByPk(phoneId);
}

export const addProductInfo = async (date: ProductResponse) => {
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
