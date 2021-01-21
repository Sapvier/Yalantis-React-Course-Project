import React from 'react';
import {totalSum} from "../../utils/services/cartCounter/total";
import "./ShoppingCart.css"
import CartItem from "./CartItem";

function ShoppingCart({addedItems}) {

    return (
        <div className="shoppingCart">
            <div className="shoppingCartTotal">Cart Subtotal: {totalSum(addedItems)}</div>
            {addedItems.map(item => <CartItem key={item.id} item={item} className="shoppingCartName" />)}
        </div>
    );
}

export default ShoppingCart;

