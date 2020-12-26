import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function DetailedCard() {
    const[item, setItem] = useState({})
    let location = useLocation();

    useEffect( () => {
        async function fetchItem() {
            const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products/${location.pathname.substring(2)}`)
            const json = await response.json()
            console.log(json)
            setItem(json)
        }
        fetchItem()
    }, [])

    return (
        <div>
            <NavBar/>
            <div className="item">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
        </div>

    );
}

export default DetailedCard;