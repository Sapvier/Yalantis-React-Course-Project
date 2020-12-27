import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Context} from "../context";

function ItemCard({item}) {
    const [count, setCount] = useState(1)

    const history = useHistory();
    const clickHandler = () => {
        history.push(`/:${item.id}`)
    };
    const {addItem} = useContext(Context)

    return (
        <div className="item">
            <div onClick={clickHandler}>
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <button onClick={() => {
                addItem(item, count)
                setCount(count+1)
                console.log(count)
            }}>Buy</button>
        </div>
    );
}

export default ItemCard;