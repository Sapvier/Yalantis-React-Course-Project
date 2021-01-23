export function saveProducts(products) {
    return {
        type: "SAVE_PRODUCTS",
        payload: products
    }
}
export const fetchSuccess = () => {
    return {
        type: "UPDATE_SUCCESS"
    }
}
export const fetchError = () => {
    return {
        type: "UPDATE_ERROR"
    }
}
export const fetchLoading = () => {
    return {
        type: "UPDATE_LOADING"
    }
}