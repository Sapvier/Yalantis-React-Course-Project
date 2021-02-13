import React from 'react';
import "../card/ItemCard.css";


function DetailedOrderCard({order}) {
    const products = order.pieces || []
    const date = order.createdAt || ""


    return (
        <div className="detailedItemCard">
            <div className="detailedItemCardContent">
                {products.map(piece => <p key={piece.id}>{piece.product.name + ' ' + piece.count} pcs.</p>)}
                <p>{date.slice(0, 10)}, {date.slice(11, 16)}</p>
            </div>
        </div>
    );
}

export default DetailedOrderCard;