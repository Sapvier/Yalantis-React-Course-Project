import {
    CART_ADD_ITEM, CART_BUY_ITEM,
    CART_CLEAR_CART, CART_ITEM_QUANTITY,
    CART_REMOVE,
    CART_SAVE_ERROR,
    CART_SAVE_ORDER,
    CART_SAVE_SUCCESS
} from "./types";


const initialState = {
    items: [],
    fetch: "pending",
    post: "pending"
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case CART_ADD_ITEM: {
                return {...state, items: state.items.concat([action.payload])}
        }
        case CART_ITEM_QUANTITY: {
                return {...state, items: state.items.concat([action.payload])}
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
