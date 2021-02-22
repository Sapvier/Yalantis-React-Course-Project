import {
    DETAILED_CARD_FETCH,
    DETAILED_CARD_FETCH_ERROR,
    DETAILED_CARD_FETCH_ITEM,
    DETAILED_CARD_FETCH_SUCCESS,
    DETAILED_CARD_SAVE_ITEM
} from "./types";


const initialState = {
    item: [],
    fetch: "pending"
}

export const detailedItemReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case DETAILED_CARD_SAVE_ITEM: {
            return {...state, item: action.payload}
        }
        case DETAILED_CARD_FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case DETAILED_CARD_FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case DETAILED_CARD_FETCH: {
            return {...state, fetch: "fetching"}
        }
    }
}