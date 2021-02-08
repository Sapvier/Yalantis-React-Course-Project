import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {connect, useDispatch, useSelector} from "react-redux";
import ItemsList from "../components/items/ItemsList";
import SideBar from "../components/sidebar/SideBar";
import {useInjectSaga} from "../store/injectSaga";
import productsSaga from "../store/products/saga";
import {UPDATE_LOADING} from "../store/products/types";
import {filter} from "../store/products/selector";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";


function ItemsPage({filterItems}) {
    useInjectSaga('productsSaga', productsSaga)
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)


    useEffect( () => {
        console.log(filterItems)
        dispatch({type: UPDATE_LOADING, payload: filterItems})
    }, [])

    return (
        <div>
            <SideBar/>
            <ItemsList products={products}/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        filterItems: filter(state)
    }
}
export default connect(mapStateToProps, null)(withHeaderAndFooter(ItemsPage))