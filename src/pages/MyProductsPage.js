import React, {useEffect} from 'react';
import "../components/items/ItemsList.css";
import {connect, useDispatch} from "react-redux";
import MyItemsList from "../components/items/MyItemsList";
import SideBar from "../components/sidebar/SideBar";
import productsSaga from "../store/products/saga";
import {useInjectSaga} from "../store/injectSaga";
import {filter, getProducts} from "../store/products/selector";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";
import {fetchLoading} from "../store/products/actions";



function MyProductsPage({filterItems, products}) {
    useInjectSaga('productsSaga', productsSaga)
    const dispatch = useDispatch()
    const isEditable = true

    useEffect(() => {
        dispatch(fetchLoading({
                path: `/products`,
                method: 'GET',
                data: null,
                filter: `?page=${filterItems.currentPage}&perPage=${filterItems.perPage}&origins=${filterItems.origin}&minPrice=${filterItems.minPrice}&maxPrice=${filterItems.maxPrice}&editable=${isEditable}`
            })
        )
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
        filterItems: filter(state),
        products: getProducts(state)
    }
}
export default connect(mapStateToProps, null)(withHeaderAndFooter(MyProductsPage))