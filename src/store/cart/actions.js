import {
    ADD_TO_CART,
    CART_BUY_ITEM,
    CART_CLEAR_CART,
    CART_REMOVE, CART_REMOVE_QUANTITY,
    CART_SAVE_ERROR,
    CART_SAVE_ORDER,
    CART_SAVE_SUCCESS, CART_SET_QUANTITY
} from "./types";

export const removeFromCart = (payload) => ({type: CART_REMOVE, payload})

export const removeQuantity = (item) => {
    return {
        type: CART_REMOVE_QUANTITY,
        payload: {...item, quantity: item.quantity - 1}
    }
}
export const setQuantity = (payload) => ({type: CART_SET_QUANTITY, payload})

export const saveOrder = (payload) => ({type: CART_SAVE_ORDER, payload})

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})

export const buyItem = (payload) => ({type: CART_BUY_ITEM, payload})

export const clearCart = () => ({type: CART_CLEAR_CART})

export const saveOrderSuccess = () => ({type: CART_SAVE_SUCCESS})

export const saveOrderError = () => ({type: CART_SAVE_ERROR})

