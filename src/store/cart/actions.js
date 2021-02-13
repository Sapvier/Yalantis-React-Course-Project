import {ADD_ITEM, CLEAR_CART, REMOVE_DUPLICATE} from "./types";
import {SAVE_ERROR, SAVE_ORDER, SAVE_SUCCESS} from "./types";

export const addItem = (item, count) => {
    return {
        type: ADD_ITEM,
        payload: {...item, quantity: count}
    }
}
export const removeDuplicate = (item) => {
    return {
        type: REMOVE_DUPLICATE,
        payload: item
    }
}
export const addQuantity = (item) => {
    return {
        type: ADD_ITEM,
        payload: {...item, quantity: item.quantity + 1}
    }
}
export const removeQuantity = (item) => {
    return {
        type: ADD_ITEM,
        payload: {...item, quantity: item.quantity - 1}
    }
}
export const setQuantity = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
export const saveOrder = () => {
    return {
        type: SAVE_ORDER
    }
}
export const saveOrderSuccess = () => {
    return {
        type: SAVE_SUCCESS
    }
}
export const saveOrderError = () => {
    return {
        type: SAVE_ERROR
    }
}
