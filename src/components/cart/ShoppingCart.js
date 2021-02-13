import React from 'react';
import {totalSum} from "../../utils/services/cartCounter/total";
import "./ShoppingCart.css"
import CartItem from "./CartItem";
import {connect, useDispatch} from "react-redux";
import {getCartItems} from "../../store/cart/selector";
import {NavLink} from "react-router-dom";
import {SAVE_ORDER} from "../../store/cart/types";


function ShoppingCart({addedItems, cartItems}) {
    const dispatch = useDispatch()
    const clickHandler = () => {
        let cart = []
        cartItems.map(item =>
            cart.push({
                productId: item.id,
                count: item.quantity
            }))
        dispatch({
            type: SAVE_ORDER, payload: {
                path: `/orders`, method: 'POST', filter: '', cart, data: JSON.stringify({
                    order: {
                        pieces: [...cart]
                    }
                })
            }
        })
    }

    return (
        <div className="shoppingCart">
            <NavLink to="/" className="backHome">Home</NavLink>
            <div className="shoppingCartTotal">Cart Subtotal: {totalSum(addedItems)}</div>
            <div className="shoppingCartItems">
                {addedItems.map(item => <CartItem key={item.id} item={item} className="shoppingCartName"/>)}
                {cartItems.length > 0 && <button className="checkOutButton" onClick={clickHandler}>Buy</button>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: getCartItems(state)
    }
}
export default connect(mapStateToProps, null)(ShoppingCart)

