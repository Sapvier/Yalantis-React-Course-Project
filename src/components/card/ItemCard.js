import React from 'react';
import "../card/ItemCard.css";


function ItemCard({item, handleClick, handleAddClick}) {
    return (
        <div className="item-card">
            <div onClick={() => handleClick(item.id)} className="item-card-content">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <div className="button-container">
                <button onClick={() =>
                    handleAddClick(item)
                }
                >Buy
                </button>
            </div>
        </div>
    );
}

export default ItemCard;