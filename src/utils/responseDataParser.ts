import {ProductInfo} from "../models/ProductInfo";

export const responseDataParser  = (foundPhoneInfo: ProductInfo) => {
    return  {
        ...foundPhoneInfo.dataValues,
        capacityAvailable: JSON.parse(foundPhoneInfo.capacityAvailable),
        colorsAvailable: JSON.parse(foundPhoneInfo.colorsAvailable),
        images: JSON.parse(foundPhoneInfo.images),
        description: JSON.parse(foundPhoneInfo.description),
        cell: JSON.parse(foundPhoneInfo.cell),
    }
}
