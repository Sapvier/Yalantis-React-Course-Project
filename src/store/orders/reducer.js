import {SAVE_ORDERS, UPDATE_ERROR, FETCH_ORDERS, UPDATE_SUCCESS} from "./types";

const initialState = {
    items: [],
    fetch: "pending",
    post: "pending"
}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_ORDERS: {
            return {...state, items: action.payload}
        }
        case UPDATE_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case UPDATE_ERROR: {
            return {...state, fetch: "error"}
        }
        case FETCH_ORDERS: {
            return {...state, fetch: "fetching"}
        }
    }
}