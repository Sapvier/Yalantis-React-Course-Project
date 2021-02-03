import React from 'react';
import "../footer/Footer.css";
import {connect, useDispatch, useSelector} from "react-redux";
import {getPages, getPerPage} from "../../store/pagination/selector";
import {fetchItems} from "../../utils/services/api/fetch";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../../store/products/actions";
import {savePages, setCurrentLimit} from "../../store/pagination/actions";
import uuid from 'react-uuid'
import PageNumber from "./PageNumber";



function Footer({pages, perPage, isEditable}) {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filterReducer)

    const changeHandler = (e) => {
        dispatch(fetchLoading())
        dispatch(setCurrentLimit(parseInt(e.target.value)))
        fetchItems(1, e.target.value, filter, isEditable).then(r => {
            dispatch(fetchSuccess())
            dispatch(saveProducts(r.items))
            dispatch(savePages(Math.ceil(r.totalItems / r.perPage)))
        }).catch(err => dispatch(fetchError()))
    }

    return (
        <div className="perPage">
            <div className="selector">
                <select onChange={changeHandler} defaultValue={perPage}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div className="pages">
                {pages.map(pageItem => <PageNumber className="page" pageItem={pageItem} key={uuid()} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pages: getPages(state),
        perPage: getPerPage(state)
    }
}
export default connect(mapStateToProps, null)(Footer)