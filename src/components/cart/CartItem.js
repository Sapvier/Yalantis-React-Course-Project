import React, {useState} from 'react';
import "./ShoppingCart.css"

function CartItem({item, handleSubstractClick, handleAddClick, changeHandler, removeClick}) {
    const [count, setCount] = useState(item.quantity)

    return (
        <div className="shopping-cart-items-content">
            <p className="shopping-cart-items-content name">{item.name}</p>
            <p>{item.price * count}</p>
            <div>
                <span onClick={() => {
                    handleSubstractClick(item)
                    if (item.quantity >= 2)
                        setCount(count - 1)
                }}>&#8722;</span>
                <input value={count} onInput={(e) => {
                    setCount(e.target.value)
                    changeHandler({...item, quantity: parseInt(e.target.value)})
                }
                }/>
                <span onClick={() => {
                    handleAddClick(item)
                    setCount(count + 1)
                }}>&#43;</span>
            </div>
            <span onClick={() => removeClick(item)
            }>&#10005;</span>
        </div>
    )
}

export default CartItem