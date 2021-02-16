import React, {useState} from 'react';
import "./ShoppingCart.css"

function CartItem({item, handleSubstractClick, handleAddClick, changeHandler, removeClick}) {
    const [count, setCount] = useState(item.quantity)

    return (
        <div className="shoppingCartContent">{item.name},&nbsp;{item.price*count}
            <span onClick={() => {
                handleSubstractClick(item)
                if (item.quantity >= 2)
                    setCount(count - 1)
            }}>&#8722;</span>
            <input type="number" className="shoppingCartItemQuantity" value={count} onInput={(e) => {
                setCount(e.target.value)
                changeHandler({...item, quantity: parseInt(e.target.value)})}
            }/>
            <span onClick={() => {
                handleAddClick(item)
                setCount(count + 1)
            }}>&#43;</span>
            <span onClick={() => removeClick(item)
            }>&#10005;</span>
        </div>
    )
}

export default CartItem