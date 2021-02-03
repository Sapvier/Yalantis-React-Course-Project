import React, { useEffect, useState } from 'react';
import { useLocation} from "react-router-dom";
import { fetchItem } from "../utils/services/api/fetch";
import "../components/card/ItemCard.css";
import DetailedOrderCard from "../components/orders/DetailedOrderCard";
import withHeader from "../HOC/withHeader";


function DetailedOrderPage() {
    const[item, setItem] = useState({})
    let location = useLocation();

    useEffect( () => {
        fetchItem(location.pathname)
            .then(r => setItem(r))
    }, [])

    return (
        <div>
            <DetailedOrderCard item={item}/>
        </div>

    );
}

export default withHeader(DetailedOrderPage);