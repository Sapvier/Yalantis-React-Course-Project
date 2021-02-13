import {FETCH_ERROR, FETCH_ITEM, FETCH_SUCCESS, SAVE_ITEM} from "./types";


const initialState = {
    item: [],
    fetch: "pending"
}

export const detailedItemReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_ITEM: {
            return {...state, item: action.payload}
        }
        case FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case FETCH_ITEM: {
            return {...state, fetch: "fetching"}
        }
    }
}