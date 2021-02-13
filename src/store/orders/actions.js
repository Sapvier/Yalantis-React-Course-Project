import {FETCH_ERROR, FETCH_ORDERS, FETCH_SUCCESS, SAVE_ERROR, SAVE_ORDER, SAVE_ORDERS, SAVE_SUCCESS} from "./types";

export function saveOrders(products) {
    return {
        type: SAVE_ORDERS,
        payload: products.items
    }
}
export const fetchSuccess = () => {
    return {
        type: FETCH_SUCCESS
    }
}
export const fetchError = () => {
    return {
        type: FETCH_ERROR
    }
}
export const fetchLoading = () => {
    return {
        type: FETCH_ORDERS
    }
}
