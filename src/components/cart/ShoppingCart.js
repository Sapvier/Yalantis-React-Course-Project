import React from 'react';
import {totalSum} from "../../utils/services/cartCounter/total";
import "./ShoppingCart.css"
import CartItem from "./CartItem";
import {useDispatch, useSelector} from "react-redux";
import {postOrder} from "../../utils/services/api/post";
import {clearCart} from "../../store/cart/actions";


function ShoppingCart({addedItems}) {
    const items = useSelector(state => state.cartReducer.items)
    const dispatch = useDispatch()
    const clickHandler = () => {
        postOrder(items).then(r => dispatch(clearCart()))
    }

    return (
        <div className="shoppingCart">
            <div className="shoppingCartTotal">Cart Subtotal: {totalSum(addedItems)}</div>
            <div className="shoppingCartItems">
                {addedItems.map(item => <CartItem key={item.id} item={item} className="shoppingCartName" />)}
                {items.length > 1
                    ? <button className="checkOutButton" onClick={clickHandler}>Buy</button>
                    : null}
            </div>
        </div>
    );
}

export default ShoppingCart;

