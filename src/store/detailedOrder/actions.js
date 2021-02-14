import {
    DETAILED_ORDER_FETCH,
    DETAILED_ORDER_FETCH_ERROR,
    DETAILED_ORDER_FETCH_SUCCESS,
    DETAILED_ORDER_SAVE_ORDER
} from "./types";

export function saveOrder(item) {
    return {
        type: DETAILED_ORDER_SAVE_ORDER,
        payload: item
    }
}
export const fetchSuccess = () => {
    return {
        type: DETAILED_ORDER_FETCH_SUCCESS
    }
}
export const fetchError = () => {
    return {
        type: DETAILED_ORDER_FETCH_ERROR
    }
}
export const fetchOrderLoading = (payload) => {
    return {
        type: DETAILED_ORDER_FETCH,
        payload: payload
    }
}