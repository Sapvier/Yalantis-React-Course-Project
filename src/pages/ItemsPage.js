import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {connect, useDispatch, useSelector} from "react-redux";
import ItemsList from "../components/items/ItemsList";
import SideBar from "../components/sidebar/SideBar";
import {useInjectSaga} from "../store/injectSaga";
import productsSaga from "../store/products/saga";
import {FETCH_LOADING} from "../store/products/types";
import {filter, getProducts} from "../store/products/selector";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";
import {useLocation} from "react-router-dom";


function ItemsPage({filterItems, products}) {
    useInjectSaga('productsSaga', productsSaga)
    const dispatch = useDispatch()
    const isEditable = false
    const queryString = require('query-string');
    const location = useLocation()
    const search = queryString.parse(location.search);

    useEffect(() => {
        dispatch({
            type: FETCH_LOADING, payload: {
                path: `/products`,
                method: 'GET',
                data: null,
                filter: `?page=${filterItems.currentPage}&perPage=${filterItems.perPage}&origins=${location.search.length > 0 ? search.origin : ''}&minPrice=${location.search.length > 0 ? search.minPrice : filterItems.minPrice}&maxPrice=${ location.search.length > 0 ? search.maxPrice : filterItems.maxPrice}&editable=${filterItems.isEditable}`
            }
        })
    }, [])


    return (
        <div>
            <SideBar isEditable={isEditable}/>
            <ItemsList products={products}/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        filterItems: filter(state),
        products: getProducts(state)
    }
}
export default connect(mapStateToProps, null)(withHeaderAndFooter(ItemsPage))