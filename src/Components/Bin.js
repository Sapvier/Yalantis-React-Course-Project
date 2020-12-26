import React, {useContext, useEffect} from 'react';
import {Context} from "../context"

function Bin() {
    const {addedItems} = useContext(Context)
    const total = addedItems.reduce((acc, obj) => acc + obj.price, 0);

    return (
        <div>
            <div>Total: {total}</div>
            {addedItems.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    );
}

export default Bin;