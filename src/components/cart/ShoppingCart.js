import React, {useContext} from 'react';
import {ItemsContext} from "../../ItemsContext"
import {totalSum} from "../../utils/services/cartCounter/total";
import "./ShoppingCart.css"

function ShoppingCart() {
    const {addedItems} = useContext(ItemsContext)

    return (
        <div className="shoppingCart">
            <div className="shoppingCartTotal">Cart Subtotal: {totalSum(addedItems)}</div>
            {addedItems.map(item => <div key={item.id}>{item.name} x{item.quantity}</div>)}
        </div>
    );
}

export default ShoppingCart;