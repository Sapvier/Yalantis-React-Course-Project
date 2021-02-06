import React from 'react';
import './Order.css';


function Order({order, id, handleClick}) {
    return (
        <div className="order" onClick={() => handleClick(order.id)}>
            <p>Order #{id}</p>
            <p>({order.createdAt.slice(0, 10)}, {order.createdAt.slice(11, 16)})</p>
        </div>
    )
}

export default Order;