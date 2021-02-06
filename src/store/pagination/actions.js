import {SAVE_PAGES, SET_PAGE, SET_PAGELIMIT} from "./types";

export function savePages(pages) {
    return {
        type: SAVE_PAGES,
        payload: pages
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