import React from 'react';
import "../components/cart/ShoppingCart.css"
import {useSelector} from "react-redux";
import ShoppingCart from "../components/cart/ShoppingCart";
import {useInjectSaga} from "../store/injectSaga";
import cartSaga from "../store/cart/saga";


function CartPage() {
    useInjectSaga('cartSaga', cartSaga)
    const addedItems = useSelector(state => state.cartReducer.items)

    return (
        <div>
            <ShoppingCart addedItems={addedItems}/>
        </div>
    );
}

export default CartPage;