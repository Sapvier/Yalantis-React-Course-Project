import React, {useState} from 'react';
import "./ShoppingCart.css"
import {useDispatch} from "react-redux";
import {addQuantity, removeDuplicate, removeQuantity, setQuantity} from "../../store/cart/actions";

function CartItem({item}) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(item.quantity)

    const changeHandler = (e) => {
        dispatch(removeDuplicate(item))
        dispatch(setQuantity({...item, quantity: e.target.value}))
        setCount(e.target.value)
    }

    return (
            <div className="shoppingCartContent">{item.name}
                <span onClick={() => {
                    if (item.quantity < 2) {
                        dispatch(removeDuplicate(item))
                    }
                    else {
                        dispatch(removeDuplicate(item))
                        dispatch(removeQuantity(item))
                        setCount(count - 1)
                    }
                }}>&#8722;</span>
                <input type="number" className="shoppingCartItemQuantity" value={count} onInput={changeHandler}/>
                <span onClick={() => {
                    dispatch(removeDuplicate(item))
                    dispatch(addQuantity(item))
                    setCount(count + 1)
                }}>&#43;</span>
                <span onClick={()=> {
                    dispatch(removeDuplicate(item))
                }}>&#10005;</span>
            </div>
    )
}
export default CartItem