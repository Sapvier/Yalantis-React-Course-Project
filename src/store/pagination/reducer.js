import {
    PAGINATION_FETCH_PAGELIMIT,
    PAGINATION_SAVE_PAGES,
    PAGINATION_SET_PAGE,
    PAGINATION_SET_PAGELIMIT
} from "./types";

const initialState = {
    totalItems: 1,
    perPage: 25,
    currentPage: 1,
    status: "pending",
    isEditable: false
}

export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case PAGINATION_SAVE_PAGES: {
            return {...state, totalItems: action.payload}
        }
        case PAGINATION_SET_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case PAGINATION_SET_PAGELIMIT: {
            return {...state, perPage: action.payload, currentPage: 1}
        }
        case PAGINATION_FETCH_PAGELIMIT: {
            return {...state, status: 'fetching'}
        }
    }
}