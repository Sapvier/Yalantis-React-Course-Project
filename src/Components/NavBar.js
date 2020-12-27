import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../context";

function NavBar() {
    const {addedItems} = useContext(Context)
    const total = addedItems.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);

    return (
        <nav>
            <div>
                <NavLink to="/bin" className="navbarLink">&#x1f6d2;</NavLink>
                <div>Total: {total}</div>
            </div>
        </nav>
    )
}

export default NavBar;