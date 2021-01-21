export const addItem = (item, count) => {
    return {
        type: "ADD_ITEM",
        payload: {...item, quantity: count}
    }
}
export const removeDuplicate = (item) => {
    return {
        type: "REMOVE_DUPLICATE",
        payload: item
    }
}
export const addQuantity = (item) => {
    return {
        type: "ADD_ITEM",
        payload: {...item, quantity: item.quantity + 1}
    }
}
export const removeQuantity = (item) => {
    return {
        type: "ADD_ITEM",
        payload: {...item, quantity: item.quantity - 1}
    }
}
export const setQuantity = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}
