import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import "../components/card/ItemCard.css";
import DetailedOrderCard from "../components/orders/DetailedOrderCard";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";
import {useInjectSaga} from "../store/injectSaga";
import detailedOrderSaga from "../store/detailedOrder/saga";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrderLoading} from "../store/detailedOrder/actions";


function DetailedOrderPage() {
    useInjectSaga('detailedOrderSaga', detailedOrderSaga)
    let location = useLocation();
    const dispatch = useDispatch()
    const order = useSelector(state => state.detailedOrderReducer.order)

    useEffect(() => {
        dispatch(fetchOrderLoading({
            path: `${location.pathname}`,
            method: 'GET',
            data: null,
            filter: ''
        }))
    }, [])

    return (
        <div>
            <DetailedOrderCard order={order}/>
        </div>

    );
}

export default withHeaderAndFooter(DetailedOrderPage);