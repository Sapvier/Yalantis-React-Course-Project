import React, {useEffect, useState} from 'react';
import "../common/SideBar.css";
import {fetchFilteredItems, fetchItems, fetchOrigins} from "../../utils/services/api/fetch";
import uuid from 'react-uuid'
import Origin from "./Origin";
import {saveProducts} from "../../store/products/actions";
import {useDispatch, useSelector} from "react-redux";


function SideBar () {
    const [origins, setOrigins] = useState([])
    const [price, setPrice] = useState({
        minPrice: 1,
        maxPrice: null
    })
    const dispatch = useDispatch()
    const originsList = useSelector(state => state.originsReducer)

    useEffect( () => {
        fetchOrigins().then(r => {
            setOrigins(r.items)
        })

    }, [])

    const clickHandler = () => {
        fetchFilteredItems(originsList.join(), price.minPrice, price.maxPrice).then(r => {
            dispatch(saveProducts(r.items))
        })
    }

    const minHandleChange = (e) => {
        setPrice({...price, minPrice: e.target.value})
    }
    const maxHandleChange = (e) => {
        setPrice({...price, maxPrice: e.target.value})
    }

    return (
        <aside className="side">
            <p>Origin:</p>
            {origins.map(origin => <Origin className="origin" origin={origin} key={uuid()}/>)}
            <div>Price
                <div>
                    <input type="number" className="sideBarPrice" name="minPrice" defaultValue={price.minPrice} onInput={ minHandleChange } />&#8212;
                    <input type="number" className="sideBarPrice" name="maxPrice" onInput={ maxHandleChange } />
                </div>
            </div>
            <button className="filterButton" onClick={clickHandler}>Filter</button>
        </aside>
    );
}

export default SideBar;