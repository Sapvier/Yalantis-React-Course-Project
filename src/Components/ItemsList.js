import React, {useEffect, useState} from 'react';
import ItemCard from "./ItemCard";
import NavBar from "./NavBar";

function ItemsList() {
    const [items, setItems] = useState([])

    useEffect( () => {
        async function fetchItems()
        {
            const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products`)
            const json = await response.json()
            // const result = json.items
            setItems(json.items)
            // setItems(result.map(item => ({...item, quantity: 1})))

        }
        fetchItems()
    }, [])

    return (
        <div>
            <NavBar/>
            {items.map(item => <ItemCard item={item} key={item.id}/>)}
        </div>
    );
}

export default ItemsList;