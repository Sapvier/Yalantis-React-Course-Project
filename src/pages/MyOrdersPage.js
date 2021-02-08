import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {useDispatch, useSelector} from "react-redux";
import MyOrders from "../components/orders/MyOrders";
import {useInjectSaga} from "../store/injectSaga";
import ordersSaga from "../store/orders/saga";
import {FETCH_ORDERS} from "../store/orders/types";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";


function MyOrdersPage() {
    useInjectSaga('ordersSaga', ordersSaga)
    const dispatch = useDispatch()
    const orders = useSelector(state => state.ordersReducer.items)

    useEffect( () => {
        dispatch({type: FETCH_ORDERS})
    }, [])

    return (
        <div>
            <MyOrders orders={orders}/>
        </div>
    );
}

export default withHeaderAndFooter(MyOrdersPage);