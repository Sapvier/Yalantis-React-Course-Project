import {
    ORDERS_FETCH_ORDERS,
    ORDERS_FETCH_ERROR,
    ORDERS_FETCH_SUCCESS,
    ORDERS_SAVE_ORDERS
} from "./types";


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
        case ORDERS_SAVE_ORDERS: {
            return {...state, items: action.payload}
        }
        case ORDERS_FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case ORDERS_FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case ORDERS_FETCH_ORDERS: {
            return {...state, fetch: "fetching"}
        }
    }
}