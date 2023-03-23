import { Product } from "../models/Product";
import { ProductResponse } from "../types/ProductResponse";

export const getAll = async () => {
    return Product.findAll();
}

export const getById = async (productId: string) => {
    return Product.findOne(
        {
            where: { phoneId: productId },
        }
    );
}

export const addProduct = async (date: ProductResponse) => {
    return Product.create({
       ...date
    });
}

export const removeProduct = async (productId: string) => {
    await Product.destroy({
        where: {
            phoneId: productId,
        }
    })
}

