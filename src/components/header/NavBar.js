import React from 'react';
import {NavLink} from "react-router-dom";
import {totalSum} from "../../utils/services/cartCounter/total";
import "../header/NavBar.css";
import {useSelector} from "react-redux";

function NavBar() {
    const addedItems = useSelector(state => state.cartReducer.items)

    return (
        <nav>
            <div className="navbar">
                <NavLink to="/cart" className="navbarLink"><button className="cartButton">Shopping Cart &#x1f6d2;</button></NavLink>
                <div className="total">Cart Subtotal: {totalSum(addedItems)}</div>
            </div>
        </nav>
    )
}

export default NavBar;