import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import {fetchItem} from "../utils/services/api/fetch";
import "../components/card/ItemCard.css";
import DetailedItemCard from "../components/card/DetailedItemCard";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";


function DetailedItemPage() {
    const[item, setItem] = useState({})
    let location = useLocation();

    useEffect( () => {
        fetchItem(location.pathname)
            .then(r => setItem(r))
    }, [])

    return (
        <div>
            <DetailedItemCard item={item}/>
        </div>

    );
}

export default withHeaderAndFooter(DetailedItemPage);