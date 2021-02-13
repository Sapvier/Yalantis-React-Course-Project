import {SAVE_PAGES, SET_EDITABLE, SET_PAGE, SET_PAGELIMIT} from "./types";

export function saveItemsCount(totalItems) {
    return {
        type: SAVE_PAGES,
        payload: totalItems
    }
}
export function setCurrentPage(page) {
    return {
        type: SET_PAGE,
        payload: page
    }
}
export function setCurrentLimit(pageLimit) {
    return {
        type: SET_PAGELIMIT,
        payload: pageLimit
    }
}
export function setEditable() {
    return {
        type: SET_EDITABLE

    }
}