import {
    DETAILED_ORDER_FETCH,
    DETAILED_ORDER_FETCH_ERROR,
    DETAILED_ORDER_FETCH_SUCCESS,
    DETAILED_ORDER_SAVE_ORDER
} from "./types";

export const saveOrder = (payload) => ({type: DETAILED_ORDER_SAVE_ORDER, payload})

export const fetchOrderLoading = (payload) => ({type: DETAILED_ORDER_FETCH, payload})

export const fetchSuccess = () => ({type: DETAILED_ORDER_FETCH_SUCCESS})

export const fetchError = () => ({type: DETAILED_ORDER_FETCH_ERROR})

