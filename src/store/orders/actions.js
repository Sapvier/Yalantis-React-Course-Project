export function saveOrders(products) {
    return {
        type: "SAVE_ORDERS",
        payload: products.items
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