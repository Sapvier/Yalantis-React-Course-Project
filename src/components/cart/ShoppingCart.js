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
    console.log(total)

    return (
        <div className="shoppingCart">
            <NavLink to="/" className="backHome">Home</NavLink>
            <div className="shoppingCartTotal">Cart Subtotal: {total}</div>
            <div className="shoppingCartItems">
                {cartItems
                    .map(item => <CartItem
                        key={item.id}
                        item={item}
                        handleSubstractClick={handleSubstractClick}
                        handleAddClick={handleAddClick}
                        changeHandler={changeHandler}
                        removeClick={removeClick}
                        className="shoppingCartName"/>)}
                {cartItems.length > 0 && <button className="checkOutButton" onClick={clickHandler}>Buy</button>}
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

