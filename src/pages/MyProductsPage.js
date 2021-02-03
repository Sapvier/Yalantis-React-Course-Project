import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../utils/services/api/fetch";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../store/products/actions";
import {savePages} from "../store/pagination/actions";
import MyItemsList from "../components/items/MyItemsList";
import Footer from "../components/footer/Footer";
import withHeader from "../HOC/withHeader";
import SideBar from "../components/sidebar/SideBar";

function MyProductsPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    const pagination = useSelector(state => state.pagesReducer)
    const filter = useSelector(state => state.filterReducer)
    const isEditable = true

    useEffect( () => {
        dispatch(fetchLoading())
        fetchItems(pagination.currentPage, pagination.perPage, filter, isEditable)
            .then(r => {
                dispatch(fetchSuccess())
                let result = []
                r.items.map(item => result.push({...item, quantity: 0}))
                dispatch(saveProducts(result))
                console.log(r.totalItems)
                dispatch(savePages(Math.ceil(r.totalItems / r.perPage)))
            }).catch(err => dispatch(fetchError()))
    }, [])

    return (
        <div>
            <SideBar isEditable={isEditable}/>
            <MyItemsList products={products}/>
            <Footer isEditable={isEditable}/>
        </div>
    );
}

export default withHeader(MyProductsPage);