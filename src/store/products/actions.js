import {SAVE_PRODUCTS, UPDATE_ERROR, UPDATE_ITEM, UPDATE_LOADING, UPDATE_SUCCESS} from "./types";

export function saveProducts(products) {
    return {
        type: SAVE_PRODUCTS,
        payload: products
    }
}
export const fetchSuccess = () => {
    return {
        type: UPDATE_SUCCESS
    }
}
export const fetchError = () => {
    return {
        type: UPDATE_ERROR
    }
}
export const fetchLoading = () => {
    return {
        type: UPDATE_LOADING
    }
}
export const updateItem = (item, id) => {
    return {
        type: UPDATE_ITEM,
        payload: {...item.product, id: id}
    }
}