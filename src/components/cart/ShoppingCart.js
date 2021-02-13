import React, {useCallback} from 'react';
import {totalSum} from "../../utils/services/cartCounter/total";
import "./ShoppingCart.css"
import CartItem from "./CartItem";
import {connect, useDispatch} from "react-redux";
import {getCartItems} from "../../store/cart/selector";
import {NavLink} from "react-router-dom";
import {
    cartBuyItem,
    removeFromCart,
    removeQuantity,
    saveOrder,
    setQuantity
} from "../../store/cart/actions";



function ShoppingCart({addedItems, cartItems}) {
    const dispatch = useDispatch()

    const handleSubstractClick = useCallback((item) => {
        if (item.quantity < 2) {
            return dispatch(removeFromCart(item))
        } else {
            return [dispatch(removeFromCart(item)),
            dispatch(removeQuantity(item))]
        }
    }, []);

    const handleAddClick = useCallback((item) => {
        return [dispatch(cartBuyItem(item)),
        dispatch(removeFromCart(item))]
    }, []);

    const removeClick = useCallback((item) => {
        return dispatch(removeFromCart(item))
    }, []);

    const changeHandler = useCallback((e, item) => {
        return [dispatch(removeFromCart(item)),
        dispatch(setQuantity({...item, quantity: e.target.value}))]
    }, []);

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
                    }
                })
            }
        ))
    }
    console.log(cartItems)

    return (
        <div className="shoppingCart">
            <NavLink to="/" className="backHome">Home</NavLink>
            <div className="shoppingCartTotal">Cart Subtotal: {totalSum(addedItems)}</div>
            <div className="shoppingCartItems">
                {addedItems.map(item => <CartItem key={item.id}
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
        cartItems: getCartItems(state)
    }
}
export default connect(mapStateToProps, null)(ShoppingCart)

