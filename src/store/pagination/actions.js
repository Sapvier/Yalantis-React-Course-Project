import {
    PAGINATION_PAGELIMIT_CHANGE,
    PAGINATION_SAVE_PAGES,
    PAGINATION_SET_PAGE,
    PAGINATION_SET_PAGELIMIT
} from "./types";

export const saveItemsCount = (payload) => ({type: PAGINATION_SAVE_PAGES, payload})

export const setCurrentPage = (payload) => ({type: PAGINATION_SET_PAGE, payload})

export const setCurrentLimit = (payload) => ({type: PAGINATION_SET_PAGELIMIT, payload})

export const pagelimitChange = (payload) => ({type: PAGINATION_PAGELIMIT_CHANGE, payload})


