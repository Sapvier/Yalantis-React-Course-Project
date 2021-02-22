import {
    CART_BUY_ITEM,
    CART_CLEAR_CART,
    CART_REMOVE,
    CART_REMOVE_QUANTITY,
    CART_SAVE_ERROR,
    CART_SAVE_ORDER,
    CART_SAVE_SUCCESS, CART_SET_QUANTITY
} from "./types";


const initialState = {
    items: [],
    fetch: "pending",
    post: "pending",
    total: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case CART_BUY_ITEM: {
            return {... state, items: action.payload.cart}
        }
        case CART_SET_QUANTITY: {
                return {
                    ...state,
                    items: state.items.map(item => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item)}
        }
        case CART_REMOVE_QUANTITY: {
                return {
                    ...state,
                    items: state.items.map(item => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item)}
        }
        case CART_REMOVE: {
            return {...state, items: state.items.filter(item => item.id !== action.payload.id)}
        }
        case CART_CLEAR_CART: {
            return {...state, items: []}
        }
        case CART_SAVE_SUCCESS: {
            return {...state, order: "success"}
        }
        case CART_SAVE_ERROR: {
            return {...state, order: "error"}
        }
        case CART_SAVE_ORDER: {
            return {...state, order: "saving"}
        }
    }
}
