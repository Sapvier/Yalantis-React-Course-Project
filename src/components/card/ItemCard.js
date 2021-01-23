import React from 'react';
import {useHistory} from 'react-router-dom';
import "../card/ItemCard.css";
import {addItem, addQuantity, removeDuplicate} from "../../store/cart/actions";
import {useDispatch, useSelector} from "react-redux";


function ItemCard({item}) {
    const dispatch = useDispatch()
    const duplicates = useSelector(state => state.cartReducer.items)
    let itemAdded = duplicates.find(duplicate => duplicate.name === item.name)

    const history = useHistory();
    const clickHandler = () => {
        history.push(({
         pathname: `/${item.id}`
        }))
    };

    return (
        <div className="itemCard">
            <div onClick={clickHandler} className="itemCardContent">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <button className="buyButton" onClick={() => {
                    if (itemAdded) {
                        dispatch(removeDuplicate(itemAdded))
                        dispatch(addQuantity(itemAdded))
                    }
                    else {
                        dispatch(removeDuplicate(item))
                        dispatch(addItem(item, 1))
                    }
            }}>Buy</button>
        </div>
    );
}

export default ItemCard;