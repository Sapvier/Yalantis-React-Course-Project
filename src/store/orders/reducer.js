const initialState = {
    items: [],
    fetch: "pending"
}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "SAVE_ORDERS": {
            return {...state, items: action.payload}
        }
        case "UPDATE_SUCCESS": {
            return {...state, fetch: "success"}
        }
        case "UPDATE_ERROR": {
            return {...state, fetch: "error"}
        }
        case "UPDATE_LOADING": {
            return {...state, fetch: "loading"}
        }
    }
}