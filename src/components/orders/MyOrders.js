import React, {useCallback} from 'react';
import Order from "./Order";
import './Order.css'
import {useHistory} from "react-router-dom";


function MyOrders({orders}) {
    const history = useHistory()

    const handleClick = useCallback((id) => {
        return history.push(`/orders/${id}`)
    }, []);

    return (
        <div className="ordersContainer">
            {orders.map(order => <Order order={order} key={order.id} id={orders.indexOf(order) + 1} handleClick={handleClick}/>)}
        </div>
    )
}

export default MyOrders;

