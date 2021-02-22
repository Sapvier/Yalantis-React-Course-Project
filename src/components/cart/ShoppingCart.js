import React, {useCallback} from 'react';
import "./ShoppingCart.css"
import CartItem from "./CartItem";
import {connect, useDispatch, useSelector} from "react-redux";
import {getCartItems, totalSum} from "../../store/cart/selector";
import {NavLink} from "react-router-dom";
import {
    addToCart,
    removeFromCart, removeQuantity,
    saveOrder,
    setQuantity
} from "../../store/cart/actions";


function ShoppingCart({cartItems, total}) {
    const dispatch = useDispatch()
    const handleSubstractClick = useCallback((item) => {
        if (item.quantity < 2) {
            return dispatch(removeFromCart(item))
        } else {
            return dispatch(removeQuantity(item))
        }
    }, []);

    const handleAddClick = useCallback((item) => {dispatch(addToCart(item))}, []);
    const removeClick = useCallback((item) => {dispatch(removeFromCart(item))}, []);
    const changeHandler = useCallback((item) => {dispatch(setQuantity(item))}, []);

    const clickHandler = () => {
        let cart = []
        cartItems.map(item =>
            cart.push({
                productId: item.id,
                count: item.quantity
            }))
        dispatch(saveOrder({
                path: `/orders`, method: 'POST', filter: '', cart, data: JSON.stringify({
                    order: {
                        pieces: [...cart]
                }})
        }))
    }

    return (
        <div className="cart-page">
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <span></span>
            </div>
            <div className="shopping-cart">
                {cartItems.length > 0 && <div className="shopping-cart-total">
                    <p>Cart Subtotal: {total}</p>
                </div>}
                {cartItems.length === 0 && <p>Your cart is empty</p>}
                <div className="shopping-cart-items">
                    {cartItems.map(item => <CartItem
                            key={item.id}
                            item={item}
                            handleSubstractClick={handleSubstractClick}
                            handleAddClick={handleAddClick}
                            changeHandler={changeHandler}
                            removeClick={removeClick}
                            className="shopping-cart-name"/>)}
                </div>
                {cartItems.length > 0 && <div className="checkout">
                    <button onClick={clickHandler}>Checkout</button>
                </div>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: getCartItems(state),
        total: totalSum(state)
    }
}
export default connect(mapStateToProps, null)(ShoppingCart)

