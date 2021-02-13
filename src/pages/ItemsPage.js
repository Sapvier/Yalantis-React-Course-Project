import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {connect, useDispatch} from "react-redux";
import ItemsList from "../components/items/ItemsList";
import SideBar from "../components/sidebar/SideBar";
import {useInjectSaga} from "../store/injectSaga";
import productsSaga from "../store/products/saga";
import {filter, getProducts} from "../store/products/selector";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";
import {useLocation} from "react-router-dom";
import {fetchLoading} from "../store/products/actions";

const queryString = require('query-string');


function ItemsPage({filterItems, products}) {
    useInjectSaga('productsSaga', productsSaga)
    const dispatch = useDispatch()
    const isEditable = false
    const location = useLocation()
    const search = queryString.parse(location.search);


    useEffect(() => {
        dispatch(
            fetchLoading({
                path: `/products`,
                method: 'GET',
                data: null,
                filter: `?page=${filterItems.currentPage}&perPage=${filterItems.perPage}&origins=${location.search.length > 0 ? search.origin : ''}&minPrice=${location.search.length > 0 ? search.minPrice : filterItems.minPrice}&maxPrice=${location.search.length > 0 ? search.maxPrice : filterItems.maxPrice}&editable=${filterItems.isEditable}`
            })
        )
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