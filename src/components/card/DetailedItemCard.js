import React from 'react';
import "../card/ItemCard.css";
import {useDispatch, useSelector} from "react-redux";
import {addItem, addQuantity, removeDuplicate} from "../../store/cart/actions";


function DetailedItemCard({item}) {
    const dispatch = useDispatch()
    const duplicates = useSelector(state => state.cartReducer.items)
    let itemAdded = duplicates.find(duplicate => duplicate.name === item.name)

    return (
            <div className="detailedItemCard">
                <div className="detailedItemCardContent">
                    <p>{item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Origin: {item.origin}</p>
                </div>
                <div className="buttonContainer">
                    <button className="buyButton"
                        onClick={() => {
                            if (itemAdded) {
                                dispatch(removeDuplicate(itemAdded))
                                dispatch(addQuantity(itemAdded))
                            }
                            else {
                                dispatch(removeDuplicate(item))
                                dispatch(addItem(item, 1))
                            }
                        }}
                    >Buy</button>
                </div>
            </div>
    );
}

export default DetailedItemCard;