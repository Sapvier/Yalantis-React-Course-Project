import React, {useEffect} from 'react';
import ItemCard from "../card/ItemCard";
import NavBar from "../header/NavBar";
import {fetchItems} from "../../utils/services/api/fetch";
import "../common/ItemsList.css";
import {useDispatch, useSelector} from "react-redux";
import {saveProducts} from "../../store/products/actions";
import SideBar from "./SideBar";

function ItemsList() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)

    useEffect( () => {
        fetchItems().then(r => {
            dispatch(saveProducts(r.items))
        })

    }, [])

    return (
        <div>
            <NavBar/>
            <SideBar/>
            <div className="itemsContainer">
                {products.map(product => <ItemCard item={product} key={product.id}/>)}
            </div>
        </div>
    );
}

export default ItemsList;