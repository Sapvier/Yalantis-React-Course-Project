import React from 'react';
import {totalSum} from "../../utils/services/cartCounter/total";
import "./ShoppingCart.css"
import {useSelector, useDispatch} from "react-redux";
import {addQuantity, removeDuplicate, removeQuantity} from "../../store/cart/actions";

function ShoppingCart() {
    const addedItems = useSelector(state => state.cartReducer.items)
    const dispatch = useDispatch()

    return (
        <div className="shoppingCart">
            <div className="shoppingCartTotal">Cart Subtotal: {totalSum(addedItems)}</div>
            {addedItems.map(item => <div key={item.id} className="shoppingCartName">{item.name}
                <div className="shoppingCartContent">
                    <span onClick={() => {
                        if (item.quantity < 2) {
                            dispatch(removeDuplicate(item))
                        }
                        else {
                            dispatch(removeDuplicate(item))
                            dispatch(removeQuantity(item))
                        }
                    }}>&#8722;</span>
                    <input type="number" className="shoppingCartItemQuantity" value={item.quantity} readOnly/>
                    <span onClick={() => {
                        dispatch(removeDuplicate(item))
                        dispatch(addQuantity(item))
                    }}>&#43;</span>
                    <span onClick={()=> {
                        dispatch(removeDuplicate(item))
                    }}>&#10005;</span>
                </div>
            </div>)}
        </div>
    );
}

export default ShoppingCart;

