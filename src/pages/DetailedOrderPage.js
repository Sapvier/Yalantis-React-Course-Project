import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import {fetchOrder} from "../utils/services/api/fetch";
import "../components/card/ItemCard.css";
import DetailedOrderCard from "../components/orders/DetailedOrderCard";


function DetailedOrderPage() {
    const[item, setItem] = useState({})
    let location = useLocation();

    useEffect( () => {
        fetchOrder(location).then(r => setItem(r))
    }, [])

    return (
        <div>
            <NavBar/>
            <DetailedOrderCard item={item}/>
        </div>

    );
}

export default DetailedOrderPage;