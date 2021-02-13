import {SAVE_ORDERS, FETCH_ORDERS, FETCH_ERROR, FETCH_SUCCESS, SAVE_SUCCESS, SAVE_ERROR, SAVE_ORDER} from "./types";

const initialState = {
    items: [],
    fetch: "pending",
    post: "pending",
    order: "pending"
}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_ORDERS: {
            return {...state, items: action.payload}
        }
        case FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case FETCH_ORDERS: {
            return {...state, fetch: "fetching"}
        }
    }
}