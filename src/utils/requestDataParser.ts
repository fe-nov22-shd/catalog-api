import {PhoneInfoResponse} from "../types/PhoneInfoResponse";

export const requestDataParser = (PhoneInfoFromRequest: PhoneInfoResponse) => {
    return {
        ...PhoneInfoFromRequest,
        capacityAvailable: JSON.stringify(PhoneInfoFromRequest.capacityAvailable),
        colorsAvailable: JSON.stringify(PhoneInfoFromRequest.colorsAvailable),
        images: JSON.stringify(PhoneInfoFromRequest.images),
        description: JSON.stringify(PhoneInfoFromRequest.description),
        cell: JSON.stringify(PhoneInfoFromRequest.cell),
    }
}
