import React, {useEffect, useState} from 'react';
import ItemCard from "../card/ItemCard";
import NavBar from "../header/NavBar";
import {fetchItems} from "../../utils/services/api/fetch";
import "../common/ItemsList.css";

function ItemsList() {
    const [items, setItems] = useState([])

    useEffect( () => {
        fetchItems().then(r => setItems(r.items))
    }, [])

    return (
        <div>
            <NavBar/>
            <div className="itemsContainer">
                {items.map(item => <ItemCard item={item} key={item.id}/>)}
            </div>
        </div>
    );
}

export default ItemsList;