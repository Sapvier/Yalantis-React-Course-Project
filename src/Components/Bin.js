import React, {useContext} from 'react';
import {Context} from "../context"

function Bin() {
    const {addedItems} = useContext(Context)
    const total = addedItems.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);

    return (
        <div>
            <div
            onClick={() => console.log(addedItems)}>Total: {total}</div>
            {addedItems.map(item => <div key={item.id}>{item.name} x{item.quantity}</div>)}
        </div>
    );
}

export default Bin;