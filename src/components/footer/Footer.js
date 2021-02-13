import React from 'react';
import "../footer/Footer.css";
import {connect, useDispatch} from "react-redux";
import {getFilter, getPages} from "../../store/pagination/selector";
import {filter} from "../../store/products/selector";
import {FETCH_PAGELIMIT} from "../../store/pagination/types";
import {useInjectSaga} from "../../store/injectSaga";
import pagesSaga from "../../store/pagination/saga";
import {FETCH_LOADING} from "../../store/products/types";
import Pagination from "react-js-pagination";


function Footer({filterItems, isEditable, filter}) {
    useInjectSaga('pagesSaga', pagesSaga)
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        dispatch({
            type: FETCH_PAGELIMIT, payload: {
                path: `/products`,
                method: 'GET',
                data: null,
                perPage: parseInt(e.target.value),
                filter: `?page=${filterItems.currentPage}&perPage=${e.target.value}&origins=${filterItems.origin}&minPrice=${filterItems.minPrice}&maxPrice=${filterItems.maxPrice}&editable=${isEditable}`
            }
        })
    }

    const backClickHandler = () => {
        dispatch({
            type: FETCH_LOADING, payload: {
                path: `/products`,
                currentPage: filterItems.currentPage === 1 ? filterItems.currentPage : filterItems.currentPage - 1,
                method: 'GET',
                data: null,
                filter: `?page=${filterItems.currentPage === 1 ? filterItems.currentPage : filterItems.currentPage - 1}&perPage=${filterItems.perPage}&origins=${filterItems.origin}&minPrice=${filterItems.minPrice}&maxPrice=${filterItems.maxPrice}&editable=${isEditable}`
            }
        })
    }
    const forwardClickHandler = () => {
        dispatch({
            type: FETCH_LOADING, payload: {
                path: `/products`,
                currentPage: filterItems.currentPage + 1,
                method: 'GET',
                data: null,
                filter: `?page=${filterItems.currentPage + 1}&perPage=${filterItems.perPage}&origins=${filterItems.origin}&minPrice=${filterItems.minPrice}&maxPrice=${filterItems.maxPrice}&editable=${isEditable}`
            }
        })
    }
    const handlePageChange = (pageNumber) => {
        dispatch({
            type: FETCH_LOADING, payload: {
                path: `/products`,
                currentPage: pageNumber,
                method: 'GET',
                data: null,
                filter: `?page=${pageNumber}&perPage=${filterItems.perPage}&origins=${filterItems.origin}&minPrice=${filterItems.minPrice}&maxPrice=${filterItems.maxPrice}&editable=${isEditable}`
            }
        })
    }


    return (
        <div className="perPage">
            <div className="pagination-block">
                <span className="pageBox" onClick={backClickHandler}>&#10094;</span>
                <Pagination
                    activePage={filterItems.currentPage}
                    itemsCountPerPage={filterItems.perPage}
                    totalItemsCount={filter.totalItems}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    hideFirstLastPages={true}
                    hideNavigation={true}
                    activeLinkClass="page-active"
                />
                <span className="pageBox" onClick={forwardClickHandler}>&#10095;</span>
            </div>
            <div className="selector">
                <select onChange={changeHandler} defaultValue={filterItems.perPage}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pages: getPages(state),
        filterItems: filter(state),
        filter: getFilter(state)

    }
}
export default connect(mapStateToProps, null)(Footer)