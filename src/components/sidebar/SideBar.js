import React, {useEffect} from 'react';
import "./SideBar.css";
import uuid from 'react-uuid'
import Origin from "./Origin";
import {connect, useDispatch} from "react-redux";
import {setMaxPrice, setMinPrice} from "../../store/origins/actions";
import {getSortedOrigins} from "../../store/origins/selector";
import originsSaga from "../../store/origins/saga";
import {FETCH_ORIGINS} from "../../store/origins/types";
import {useInjectSaga} from "../../store/injectSaga";
import {filter} from "../../store/products/selector";
import {UPDATE_LOADING} from "../../store/products/types";


function SideBar ({origins, isEditable, filterItems}) {
    useInjectSaga('originsSaga', originsSaga)
    const dispatch = useDispatch()


    useEffect( () => {
        if (origins.length === 0)
            dispatch({type: FETCH_ORIGINS})
    }, [])


    const clickHandler = () => {
        dispatch({type: UPDATE_LOADING, payload: {...filterItems, isEditable}})
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
                    <input type="number" className="sideBarPrice" name="minPrice" defaultValue={filterItems.minPrice} onInput={minHandleChange}/>&#8212;
                    <input type="number" className="sideBarPrice" name="maxPrice" onInput={maxHandleChange}/>
                </div>
            </div>
            <button className="filterButton" onClick={clickHandler}>Filter</button>
        </aside>
    );
}


const mapStateToProps = (state) => {
    return {
        origins: getSortedOrigins(state),
        filterItems: filter(state)
    }
}
export default connect(mapStateToProps, null)(SideBar)