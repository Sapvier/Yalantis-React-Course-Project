import React, {useEffect} from 'react';
import "./SideBar.css";
import {fetchItems, fetchOrigins} from "../../utils/services/api/fetch";
import uuid from 'react-uuid'
import Origin from "./Origin";
import {connect, useDispatch, useSelector} from "react-redux";
import {addOrigins, setMaxPrice, setMinPrice} from "../../store/origins/actions";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../../store/products/actions";
import {savePages} from "../../store/pagination/actions";
import {getSortedOrigins} from "../../store/origins/selector";


function SideBar ({origins, isEditable}) {
    const dispatch = useDispatch()
    const minPrice = useSelector(state => state.filterReducer.price.minPrice)
    const filter = useSelector(state => state.filterReducer)
    const pagination = useSelector(state => state.pagesReducer)

    useEffect( () => {
        if (origins.length === 0)
            fetchOrigins().then(r => {r.items.map(item => dispatch(addOrigins({...item, isChecked: false})))
        })
    }, [])


    const clickHandler = () => {
        dispatch(fetchLoading())
        fetchItems(pagination.currentPage, pagination.perPage, filter, isEditable).then(r => {
            dispatch(fetchSuccess())
            dispatch(saveProducts(r.items))
            dispatch(savePages(Math.ceil(r.totalItems / r.perPage)))
        }).catch(err => dispatch(fetchError()))
    }

    const minHandleChange = (e) => {
        dispatch(setMinPrice(e.target.value))
    }
    const maxHandleChange = (e) => {
        dispatch(setMaxPrice(e.target.value))
    }

    return (
        <aside className="side">
            <p>Origin:</p>
            {origins.map(origin => <Origin className="origin" origin={origin} key={uuid()}/>)}
            <div>Price
                <div>
                    <input type="number" className="sideBarPrice" name="minPrice" defaultValue={minPrice} onInput={minHandleChange}/>&#8212;
                    <input type="number" className="sideBarPrice" name="maxPrice" onInput={maxHandleChange}/>
                </div>
            </div>
            <button className="filterButton" onClick={clickHandler}>Filter</button>
        </aside>
    );
}


const mapStateToProps = (state) => {
    return {
        origins: getSortedOrigins(state)
    }
}
export default connect(mapStateToProps, null)(SideBar)