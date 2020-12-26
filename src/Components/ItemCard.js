import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Context} from "../context";

function ItemCard({item}) {

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
            <button onClick={() => addItem(item)}>Buy</button>
        </div>
    );
}

export default ItemCard;