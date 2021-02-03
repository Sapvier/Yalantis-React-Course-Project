import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {useDispatch, useSelector} from "react-redux";
import ItemsList from "../components/items/ItemsList";
import {fetchItems} from "../utils/services/api/fetch";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../store/products/actions";
import SideBar from "../components/sidebar/SideBar";
import {savePages} from "../store/pagination/actions";
import withFooter from "../HOC/withFooter";
import withHeader from "../HOC/withHeader";


function ItemsPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    const pagination = useSelector(state => state.pagesReducer)
    const filter = useSelector(state => state.filterReducer)

    useEffect( () => {
        dispatch(fetchLoading())
        fetchItems(pagination.currentPage, pagination.perPage, filter)
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
            <SideBar/>
            <ItemsList products={products}/>
        </div>
    );
}

export default withHeader(withFooter(ItemsPage));