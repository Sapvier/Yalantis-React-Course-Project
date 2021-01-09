import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {ItemsContext} from "../../ItemsContext";
import {totalSum} from "../../utils/services/cartCounter/total";
import "../header/NavBar.css";

function NavBar() {
    const {addedItems} = useContext(ItemsContext)

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