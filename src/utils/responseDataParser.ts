import {PhoneInfo} from "../models/PhoneInfo";

export const responseDataParser  = (foundPhoneInfo: PhoneInfo) => {
    return  {
        ...foundPhoneInfo.dataValues,
        capacityAvailable: JSON.parse(foundPhoneInfo.capacityAvailable),
        colorsAvailable: JSON.parse(foundPhoneInfo.colorsAvailable),
        images: JSON.parse(foundPhoneInfo.images),
        description: JSON.parse(foundPhoneInfo.description),
        cell: JSON.parse(foundPhoneInfo.cell),
    }
}
