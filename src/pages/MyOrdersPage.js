import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "../utils/services/api/fetch";
import {fetchError, fetchLoading, fetchSuccess, saveOrders} from "../store/orders/actions";
import MyOrders from "../components/orders/MyOrders";
import withHeader from "../HOC/withHeader";


function MyOrdersPage() {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.ordersReducer.items)

    useEffect( () => {
        dispatch(fetchLoading())
        fetchOrders()
            .then(r => {
                dispatch(fetchSuccess())
                dispatch(saveOrders(r))
            }).catch(err => dispatch(fetchError()))
    }, [])

    return (
        <div>
            <MyOrders orders={orders}/>
        </div>
    );
}

export default withHeader(MyOrdersPage);