import {
    DETAILED_ORDER_FETCH_ERROR,
    DETAILED_ORDER_FETCH_ORDER,
    DETAILED_ORDER_FETCH_SUCCESS,
    DETAILED_ORDER_SAVE_ORDER
} from "./types";


const initialState = {
    order: [],
    fetch: "pending"
}

export const detailedOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case DETAILED_ORDER_SAVE_ORDER: {
            return {...state, order: action.payload}
        }
        case DETAILED_ORDER_FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case DETAILED_ORDER_FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case DETAILED_ORDER_FETCH_ORDER: {
            return {...state, fetch: "fetching"}
        }
    }
}