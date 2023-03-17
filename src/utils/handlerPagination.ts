import {Phone} from "../models/Phone";

export const handlerPagination = (currentPage: number, itemsPerPage: number,  phones: Phone[]) => {
    const total = phones.length;
    const from = currentPage * itemsPerPage - itemsPerPage;
    const to = currentPage * itemsPerPage > total
        ? total
        : +currentPage * +itemsPerPage;

    return phones.slice(from, to);
}
