import {query} from "express";
import {Product} from "../models/Product";

export const handlerFilter = (query: string, products: Product[]) => {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}
