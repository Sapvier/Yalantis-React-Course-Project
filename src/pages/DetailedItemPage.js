import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import {fetchItem} from "../utils/services/api/fetch";
import "../components/card/ItemCard.css";
import DetailedItemCard from "../components/card/DetailedItemCard";


function DetailedItemPage() {
    const[item, setItem] = useState({})
    let location = useLocation();

    useEffect( () => {
        fetchItem(location).then(r => setItem(r))
    }, [])

    return (
        <div>
            <NavBar/>
            <DetailedItemCard item={item}/>
        </div>

    );
}

export default DetailedItemPage;