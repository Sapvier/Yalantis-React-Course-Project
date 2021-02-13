import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {totalSum} from "../../utils/services/cartCounter/total";
import "../header/NavBar.css";
import {useSelector} from "react-redux";
import AddItemModal from "./AddItemModal";
import AddItemForm from "./AddItemForm";



function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const addedItems = useSelector(state => state.cartReducer.items)


    return (
        <nav>
            <div className="navbar">
                <NavLink to="/" className="addButton">Home</NavLink>
                <NavLink to="/myproducts" className="addButton">My Products</NavLink>
                <NavLink to="/orders" className="addButton">My Orders</NavLink>
                <p className="addButton" onClick={() => setIsOpen(true)}>Add a Product</p>
                <AddItemModal open={isOpen} onClose={() => setIsOpen(false)}>
                    <AddItemForm onClose={() => setIsOpen(false)}/>
                </AddItemModal>
                <div className="cart">
                    <NavLink to="/cart" className="navbarLink">
                        <button className="cartButton">Shopping Cart &#x1f6d2;</button>
                    </NavLink>
                    <div className="total">Cart Subtotal: {totalSum(addedItems)}</div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;