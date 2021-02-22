export const getCartItems = state => state.cartReducer.items


export const totalSum = state => {
    let cart = getCartItems(state)
    let total = cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
    return total
}



