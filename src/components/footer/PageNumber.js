import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {UPDATE_LOADING} from "../../store/products/types";
import {filter} from "../../store/products/selector";


function PageNumber({pageItem, filterItems, isEditable}) {
    const dispatch = useDispatch()
    const pagination = useSelector(state => state.pagesReducer)

    const clickHandler = () => {
        dispatch({type: UPDATE_LOADING, payload: {...filterItems, currentPage: pageItem, isEditable}})
    }
    if (pagination.currentPage === parseInt(pageItem)) {
        return (
            <div className="pageFocused" onClick={clickHandler}>{pageItem}</div>
        );
    }
    else return <div className="page" onClick={clickHandler}>{pageItem}</div>
}


const mapStateToProps = (state) => {
    return {
        filterItems: filter(state)
    }
}
export default connect(mapStateToProps, null)(PageNumber)