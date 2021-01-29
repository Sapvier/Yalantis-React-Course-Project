import React from 'react';
import Order from "./Order";
import './Order.css'


function MyOrders({orders}) {
    return (
        <div className="ordersContainer">
            {orders.map(order => <Order order={order} key={order.id} id={orders.indexOf(order) + 1}/>)}
        </div>
    )
}

export default MyOrders;

