import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import NavBar from "../header/NavBar";
import {fetchItem} from "../../utils/services/api/fetch";
import "../card/ItemCard.css";
import {useDispatch} from "react-redux";
import {addItem, removeDuplicate} from "../../store/cart/actions";


function DetailedItemCard() {
    const[item, setItem] = useState({})
    let location = useLocation();
    const dispatch = useDispatch()


    useEffect( () => {
        fetchItem(location).then(r => setItem(r))
    }, [])

    return (
        <div>
            <NavBar/>
            <div className="detailedItemCard">
                <div>
                    <p>{item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Origin: {item.origin}</p>
                </div>
                <button className="buyButton" onClick={() => {
                    dispatch(removeDuplicate(item))
                    dispatch(addItem(item, location.state.count))
                    location.state.count++
                }}>Buy</button>
            </div>
        </div>

    );
}

export default DetailedItemCard;