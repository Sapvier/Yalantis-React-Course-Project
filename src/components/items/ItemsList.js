import React from 'react';
import ItemCard from "../card/ItemCard";
import "./ItemsList.css";


function ItemsList({products}) {
    return (
        <div className="itemsContainer">
            {products.map(product => <ItemCard item={product} key={product.id}/>)}
        </div>
    );
}

export default ItemsList;