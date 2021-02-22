import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "../header/NavBar.css";
import {useSelector} from "react-redux";
import AddItemModal from "./AddItemModal";
import AddItemForm from "./AddItemForm";
import {totalSum} from "../../store/cart/selector";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const total = useSelector(totalSum)

    return (
        <nav>
            <div className="navbar">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/myproducts">My Products</NavLink>
                <NavLink to="/orders">My Orders</NavLink>
                <p className="add-button" onClick={() => setIsOpen(true)}>Add a Product</p>
                <AddItemModal open={isOpen} onClose={() => setIsOpen(false)}>
                    <AddItemForm onClose={() => setIsOpen(false)}/>
                </AddItemModal>
                <div className="cart">
                    <NavLink to="/cart">
                        <button>To Shopping Cart</button>
                    </NavLink>
                    <div>&#x1f6d2; Subtotal: {total}</div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;