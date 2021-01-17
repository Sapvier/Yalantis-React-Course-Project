import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import "../card/ItemCard.css";
import {addItem, removeDuplicate} from "../../store/cart/actions";
import {useDispatch} from "react-redux";


function ItemCard({item}) {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()

    const history = useHistory();
    const clickHandler = () => {
        history.push(({
         pathname: `/${item.id}`,
         state: {count}
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
                dispatch(removeDuplicate(item))
                dispatch(addItem(item, count))
                setCount(count+1)
            }}>Buy</button>
        </div>
    );
}

export default ItemCard;