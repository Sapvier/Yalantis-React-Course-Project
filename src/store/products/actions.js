import {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCH_LOADING,
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_SAVE_PRODUCTS,
    PRODUCTS_UPDATE_ITEM
} from "./types";

export function saveProducts(products) {
    return {
        type: PRODUCTS_SAVE_PRODUCTS,
        payload: products
    }
}
export const fetchSuccess = () => {
    return {
        type: PRODUCTS_FETCH_SUCCESS
    }
}
export const fetchError = () => {
    return {
        type: PRODUCTS_FETCH_ERROR
    }
}
export const fetchLoading = (payload) => {
    return {
        type: PRODUCTS_FETCH_LOADING,
        payload: payload
    }
}
export const updateItem = (item) => {
    return {
        type: PRODUCTS_UPDATE_ITEM,
        payload: item
    }
}