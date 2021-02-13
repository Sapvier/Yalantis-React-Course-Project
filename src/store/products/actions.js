import {
    FETCH_ERROR, FETCH_LOADING,
    FETCH_SUCCESS,
    SAVE_PRODUCTS,
    UPDATE_ITEM
} from "./types";

export function saveProducts(products) {
    return {
        type: SAVE_PRODUCTS,
        payload: products
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
        type: FETCH_LOADING
    }
}
export const updateItem = (item) => {
    return {
        type: UPDATE_ITEM,
        payload: item
    }
}