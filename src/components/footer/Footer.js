import React from 'react';
import "../footer/Footer.css";
import {connect, useDispatch, useSelector} from "react-redux";
import {getPages, getPerPage} from "../../store/pagination/selector";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../../store/products/actions";
import {savePages, setCurrentLimit} from "../../store/pagination/actions";
import uuid from 'react-uuid'
import PageNumber from "./PageNumber";
import {filter} from "../../store/products/selector";
import {FETCH_PAGELIMIT} from "../../store/pagination/types";
import {useInjectSaga} from "../../store/injectSaga";
import pagesSaga from "../../store/pagination/saga";



function Footer({pages, filterItems, isEditable}) {
    useInjectSaga('pagesSaga', pagesSaga)
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        dispatch({type: FETCH_PAGELIMIT, payload: {...filterItems, perPage: e.target.value, isEditable}})
    }

    return (
        <div className="perPage">
            <div className="selector">
                <select onChange={changeHandler} defaultValue={filterItems.perPage}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div className="pages">
                {pages.map(pageItem => <PageNumber className="page" pageItem={pageItem} isEditable={isEditable} key={uuid()} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pages: getPages(state),
        filterItems: filter(state)
    }
}
export default connect(mapStateToProps, null)(Footer)