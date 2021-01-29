import React from 'react';
import './Order.css';
import {useHistory } from "react-router-dom";


function Order({order, id}) {
    const history = useHistory()
    const clickHandler = () => {
        history.replace(({
            pathname: `/orders/${order.id}`
        }))

    };

    return (
        <div className="order" onClick={clickHandler}>
            <p>Order #{id}</p>
            <p>({order.createdAt.slice(0, 10)}, {order.createdAt.slice(11, 16)})</p>
        </div>
    )
}

export default Order;