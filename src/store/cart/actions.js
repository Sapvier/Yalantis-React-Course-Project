import {
    CART_ADD_ITEM, CART_BUY_ITEM,
    CART_CLEAR_CART, CART_ITEM_QUANTITY,
    CART_REMOVE,
    CART_SAVE_ERROR,
    CART_SAVE_ORDER,
    CART_SAVE_SUCCESS
} from "./types";


export const addItem = (item, count) => {
    return {
        type: CART_ADD_ITEM,
        payload: {...item, quantity: count}
    }
}
export const removeFromCart = (item) => {
    return {
        type: CART_REMOVE,
        payload: item
    }
}
export const cartBuyItem = (item) => {
    return {
        type: CART_BUY_ITEM,
        payload: item
    }
}

export const addQuantity = (item) => {
    return {
        type: CART_ITEM_QUANTITY,
        payload: {...item, quantity: item.quantity + 1}
    }
}
export const removeQuantity = (item) => {
    return {
        type: CART_ADD_ITEM,
        payload: {...item, quantity: item.quantity - 1}
    }
}
export const setQuantity = (item) => {
    return {
        type: CART_ADD_ITEM,
        payload: item
    }
}
export const clearCart = () => {
    return {
        type: CART_CLEAR_CART
    }
}
export const saveOrder = (payload) => {
    return {
        type: CART_SAVE_ORDER,
        payload: payload
    }
}
export const saveOrderSuccess = () => {
    return {
        type: CART_SAVE_SUCCESS
    }
}
export const saveOrderError = () => {
    return {
        type: CART_SAVE_ERROR
    }
}
