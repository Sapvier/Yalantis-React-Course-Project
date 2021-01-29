import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchMyProducts} from "../utils/services/api/fetch";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../store/products/actions";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import {savePages} from "../store/pagination/actions";
import MyItemsList from "../components/items/MyItemsList";
import MyProductsSideBar from "../components/sidebar/MyProductsSideBar";

function MyProductsPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    const pagination = useSelector(state => state.pagesReducer)
    const filter = useSelector(state => state.filterReducer)

    useEffect( () => {
        dispatch(fetchLoading())
        fetchMyProducts(pagination.currentPage, pagination.perPage, filter)
            .then(r => {
                dispatch(fetchSuccess())
                let result = []
                r.items.map(item => result.push({...item, quantity: 0}))
                dispatch(saveProducts(result))
                dispatch(savePages(Math.ceil(r.totalItems / r.perPage)))
            }).catch(err => dispatch(fetchError()))
    }, [])

    return (
        <div>
            <NavBar/>
            <MyProductsSideBar/>
            <MyItemsList products={products}/>
            <Footer />
        </div>
    );
}

export default MyProductsPage;