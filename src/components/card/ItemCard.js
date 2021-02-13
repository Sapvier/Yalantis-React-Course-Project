import React from 'react';
import "../card/ItemCard.css";
import {addItem, addQuantity, removeDuplicate} from "../../store/cart/actions";
import {useDispatch, useSelector} from "react-redux";


function ItemCard({item, handleClick}) {
    const dispatch = useDispatch()
    const duplicates = useSelector(state => state.cartReducer.items)
    let itemAdded = duplicates.find(duplicate => duplicate.name === item.name)

    return (
        <div className="itemCard">
            <div onClick={() => handleClick(item.id)} className="itemCardContent">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <div className="buttonContainer">
                <button className="buyButton" onClick={() => {
                    if (itemAdded) {
                        dispatch(removeDuplicate(itemAdded))
                        dispatch(addQuantity(itemAdded))
                    } else {
                        dispatch(removeDuplicate(item))
                        dispatch(addItem(item, 1))
                    }
                }}>Buy
                </button>
            </div>
        </div>
    );
}

export default ItemCard;