import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {connect, useDispatch, useSelector} from "react-redux";
import MyItemsList from "../components/items/MyItemsList";
import SideBar from "../components/sidebar/SideBar";
import productsSaga, {fetchItems} from "../store/products/saga";
import {useInjectSaga} from "../store/injectSaga";
import {UPDATE_LOADING} from "../store/products/types";
import {filter} from "../store/products/selector";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";


function MyProductsPage({filterItems}) {
    useInjectSaga('productsSaga', productsSaga)
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    const isEditable = true

    useEffect( () => {
        dispatch({type: UPDATE_LOADING, payload: {...filterItems, isEditable}})

    }, [])

    return (
        <div>
            <SideBar isEditable={isEditable}/>
            <MyItemsList products={products}/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        filterItems: filter(state)
    }
}
export default connect(mapStateToProps, null)(withHeaderAndFooter(MyProductsPage))