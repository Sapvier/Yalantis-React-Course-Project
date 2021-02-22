import React, {useCallback, useEffect} from 'react';
import "./SideBar.css";
import uuid from 'react-uuid'
import Origin from "./Origin";
import {connect, useDispatch} from "react-redux";
import {getFilterItems, getOriginsArray, getSortedOrigins} from "../../store/origins/selector";
import originsSaga from "../../store/origins/saga";
import {useInjectSaga} from "../../store/injectSaga";
import {filter} from "../../store/products/selector";
import {fetchingOrigins, maxPriceChange, minPriceChange, originChange} from "../../store/origins/actions";
import {useLocation, useHistory} from "react-router-dom";


function SideBar({origins, isEditable, filterItems, originsArray}) {
    useInjectSaga('originsSaga', originsSaga)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const queryString = require('query-string');
    const search = queryString.parse(location.search);


    useEffect(() => {
        if (origins.length === 0)
            dispatch(fetchingOrigins({
                path: `/products-origins`, method: 'GET', filter: '', origin: search.origin, price: {
                    minPrice: location.search.length > 0 ? search.minPrice : filterItems.minPrice,
                    maxPrice: location.search.length > 0 ? search.maxPrice : filterItems.maxPrice
                }
            }))
    }, [])


    const changeHandler = useCallback((origin, originsArray) => {
        let originsArr = [...originsArray]
        if (originsArray.includes(origin.value)) {
            originsArr = originsArr.filter(item => {
                return item !== origin.value
            })
        } else originsArr.push(origin.value)

        return [dispatch(originChange({
            origin,
            filterItems,
            isEditable
        })),
            history.replace({
                pathname: `${location.pathname}`,
                search: `minPrice=${filterItems.minPrice}&maxPrice=${filterItems.maxPrice}&origin=${originsArr.join()}`
            })]
    }, []);


    const minHandleChange = (e) => {
        dispatch(minPriceChange({
            filterItems,
            isEditable,
            price: {
                maxPrice: filterItems.maxPrice,
                minPrice: e.target.value,
            }
        }))
        history.replace({
            pathname: `${location.pathname}`,
            search: `minPrice=${e.target.value}&maxPrice=${filterItems.maxPrice}&origin=${originsArray.join()}`
        })
    }

    const maxHandleChange = (e) => {
        dispatch(maxPriceChange({
            filterItems,
            isEditable,
            price: {
                maxPrice: e.target.value,
                minPrice: filterItems.minPrice
            }
        }))
        history.replace({
            pathname: `${location.pathname}`,
            search: `minPrice=${filterItems.minPrice}&maxPrice=${e.target.value}&origin=${originsArray.join()}`
        })
    }

    return (
        <aside className="side">
            <form>
                <p>Origin</p>
                {origins.map(origin =>
                    <Origin
                        className="origin"
                        origin={origin}
                        key={uuid()}
                        isEditable={isEditable}
                        changeHandler={changeHandler}
                        originsArray={originsArray}
                    />)}

                <div className="price-block">Price
                    <div className="price-range">
                        <input type="number"
                               className="sidebar-price"
                               name="minPrice"
                               defaultValue={filterItems.minPrice}
                               onInput={minHandleChange}/>&#8212;
                        <input type="number"
                               className="sidebar-price"
                               name="maxPrice"
                               onInput={maxHandleChange}
                               defaultValue={filterItems.maxPrice}/>
                    </div>
                </div>
            </form>
        </aside>
    );
}


const mapStateToProps = (state) => {
    return {
        origins: getSortedOrigins(state),
        filterItems: filter(state),
        filter: getFilterItems(state),
        originsArray: getOriginsArray(state)
    }
}
export default connect(mapStateToProps, null)(SideBar)