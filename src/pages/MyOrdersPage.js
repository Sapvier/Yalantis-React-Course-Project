import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {useDispatch, useSelector} from "react-redux";
import MyOrders from "../components/orders/MyOrders";
import {useInjectSaga} from "../store/injectSaga";
import ordersSaga from "../store/orders/saga";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";
import {fetchOrdersLoading} from "../store/orders/actions";


function MyOrdersPage() {
    useInjectSaga('ordersSaga', ordersSaga)
    const dispatch = useDispatch()
    const orders = useSelector(state => state.ordersReducer.items)

    useEffect( () => {
        dispatch(fetchOrdersLoading({path: `/orders`, method: 'GET', filter: ``, data: null}))
    }, [])

    return (
        <div>
            <MyOrders orders={orders}/>
        </div>
    );
}

export default withHeaderAndFooter(MyOrdersPage);