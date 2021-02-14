import React from 'react';
import "../card/ItemCard.css";


function ItemCard({item, handleClick, handleAddClick}) {
    return (
        <div className="itemCard">
            <div onClick={() => handleClick(item.id)} className="itemCardContent">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <div className="buttonContainer">
                <button className="buyButton" onClick={() =>
                    handleAddClick(item)
                }
                >Buy
                </button>
            </div>
        </div>
    );
}

export default ItemCard;