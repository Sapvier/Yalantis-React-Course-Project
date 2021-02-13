import {
    PAGINATION_SAVE_PAGES,
    PAGINATION_SET_PAGE,
    PAGINATION_SET_PAGELIMIT
} from "./types";

export function saveItemsCount(totalItems) {
    return {
        type: PAGINATION_SAVE_PAGES,
        payload: totalItems
    }
}
export function setCurrentPage(page) {
    return {
        type: PAGINATION_SET_PAGE,
        payload: page
    }
}
export function setCurrentLimit(pageLimit) {
    return {
        type: PAGINATION_SET_PAGELIMIT,
        payload: pageLimit
    }
}
