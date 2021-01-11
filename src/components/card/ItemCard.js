import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ItemsContext} from "../../ItemsContext";
import "../card/ItemCard.css";

function ItemCard({item}) {
    const [count, setCount] = useState(1)

    const history = useHistory();
    const clickHandler = () => {
        history.push(({
         pathname: `/${item.id}`,
         state: {count}
        }))
    };
    const {addItem} = useContext(ItemsContext)


    return (
        <div className="itemCard">
            <div onClick={clickHandler} className="itemCardContent">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <button className="buyButton" onClick={() => {
                addItem(item, count)
                setCount(count+1)
            }}>Buy</button>
        </div>
    );
}

export default ItemCard;