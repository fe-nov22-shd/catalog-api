import {Sort} from "../types/Sort";
import {Phone} from "../models/Phone";

export const handlerSort = (sortType: string, phones: Phone[]) => {
    if (sortType) {
        switch (sortType as Sort) {
            case Sort.Newest:
                phones.sort((a, b) => b.year - a.year);
                break;

            case Sort.Cheapest:
                phones.sort((a, b) => a.price - b.price);
                break

            case Sort.Alphabetically:
                phones.sort((a, b) => a.name.localeCompare(b.name));
                break

            default:
                break;
        }
    }
}
