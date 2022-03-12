import { sortAndDeduplicateDiagnostics } from "typescript";

export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages: number) => {
    const pages: number[] = [];
    for(let i: number = 0; i < totalPages; i++) {
        pages.push(i + 1);
    }
    return pages;
}

