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
            {products.length > 0 && products.map(product => <ItemCard item={{...product, quantity: 1}} key={product.id} handleClick={handleClick}/>)}
        </div>
    );
}

export default ItemsList;