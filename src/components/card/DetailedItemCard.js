import React from 'react';
import "../card/ItemCard.css";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/cart/actions";


function DetailedItemCard({item}) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartReducer.items)
    return (
        <div className="detailedItemCard">
            <div className="detailedItemCardContent">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <div className="buttonContainer">
                <button className="buyButton"
                        onClick={() => dispatch(addToCart(cartItems, item))}
                >Buy
                </button>
            </div>
        </div>
    );
}

export default DetailedItemCard;