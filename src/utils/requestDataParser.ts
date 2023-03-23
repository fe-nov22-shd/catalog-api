import {ProductResponse} from "../types/ProductnfoResponse";

export const requestDataParser = (PhoneInfoFromRequest: ProductResponse) => {
    return {
        ...PhoneInfoFromRequest,
        capacityAvailable: JSON.stringify(PhoneInfoFromRequest.capacityAvailable),
        colorsAvailable: JSON.stringify(PhoneInfoFromRequest.colorsAvailable),
        images: JSON.stringify(PhoneInfoFromRequest.images),
        description: JSON.stringify(PhoneInfoFromRequest.description),
        cell: JSON.stringify(PhoneInfoFromRequest.cell),
    }
}
