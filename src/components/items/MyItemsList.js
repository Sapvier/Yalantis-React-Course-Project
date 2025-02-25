import React from 'react';
import MyItemCard from "../card/MyItemCard";
import "./ItemsList.css";


function MyItemsList({products}) {
    return (
        <div className="items-container">
            {products.map(product => <MyItemCard item={product} key={product.id}/>)}
        </div>
    );
}

export default MyItemsList;