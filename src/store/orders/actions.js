import {
    ORDERS_FETCH_ERROR,
    ORDERS_FETCH_ORDERS,
    ORDERS_FETCH_SUCCESS,
    ORDERS_SAVE_ORDERS
} from "./types";

export function saveOrders(products) {
    return {
        type: ORDERS_SAVE_ORDERS,
        payload: products.items
    }
}
export const fetchOrdersSuccess = () => {
    return {
        type: ORDERS_FETCH_SUCCESS
    }
}
export const fetchOrdersError = () => {
    return {
        type: ORDERS_FETCH_ERROR
    }
}
export const fetchOrdersLoading = (payload) => {
    return {
        type: ORDERS_FETCH_ORDERS,
        payload: payload
    }
}
