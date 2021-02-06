import React, {useCallback} from 'react';
import ItemCard from "../card/ItemCard";
import "./ItemsList.css";
import {useHistory} from "react-router-dom";


function ItemsList({products}) {
    const history = useHistory();
    const handleClick = useCallback((id) => {
        return history.push(`/products/${id}`)
    }, []);


    return (
        <div className="itemsContainer">
            {products.map(product => <ItemCard item={product} key={product.id} handleClick={handleClick}/>)}
        </div>
    );
}

export default ItemsList;