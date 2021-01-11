export const totalSum = (addedItems) => {
    return addedItems.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
};