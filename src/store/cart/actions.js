import {
    CART_BUY_ITEM,
    CART_CLEAR_CART,
    CART_REMOVE, CART_REMOVE_QUANTITY,
    CART_SAVE_ERROR,
    CART_SAVE_ORDER,
    CART_SAVE_SUCCESS, CART_SET_QUANTITY
} from "./types";



export const removeFromCart = (item) => {
    return {
        type: CART_REMOVE,
        payload: item
    }
}
export const removeQuantity = (item) => {
    return {
        type: CART_REMOVE_QUANTITY,
        payload: {...item, quantity: item.quantity - 1}
    }
}
export const setQuantity = (item) => {
    return {
        type: CART_SET_QUANTITY,
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

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let itemAlreadyInCart = false;
    cartItems.forEach((item) => {
        if (item.id === product.id) {
            item.quantity += 1;
            itemAlreadyInCart = true;
        }
    });
    if (itemAlreadyInCart === false) {
        cartItems.push({...product, quantity: 1});
    }
    dispatch({ type: CART_BUY_ITEM, payload: { cartItems }});
};
