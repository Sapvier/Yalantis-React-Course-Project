import {
    ORDERS_FETCH_ERROR,
    ORDERS_FETCH_ORDERS,
    ORDERS_FETCH_SUCCESS,
    ORDERS_SAVE_ORDERS
} from "./types";

export const saveOrders = (products) => ({type: ORDERS_SAVE_ORDERS, payload: products.items})

export const fetchOrdersLoading = (payload) => ({type: ORDERS_FETCH_ORDERS, payload})

export const fetchOrdersSuccess = () => ({type: ORDERS_FETCH_SUCCESS})

export const fetchOrdersError = () => ({type: ORDERS_FETCH_ERROR})


