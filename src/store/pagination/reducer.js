import {FETCH_PAGELIMIT, SAVE_PAGES, SET_EDITABLE, SET_PAGE, SET_PAGELIMIT} from "./types";

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
        case SAVE_PAGES: {
            return {...state, totalItems: action.payload}
        }
        case SET_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case SET_PAGELIMIT: {
            return {...state, perPage: action.payload, currentPage: 1}
        }
        case FETCH_PAGELIMIT: {
            return {...state, status: 'fetching'}
        }
        case SET_EDITABLE: {
            return {...state, isEditable: !state.isEditable}
        }
    }
}