import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {savePages, setCurrentPage} from "../../store/pagination/actions";
import {fetchItems} from "../../utils/services/api/fetch";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../../store/products/actions";


function PageNumber({pageItem}) {
    const dispatch = useDispatch()
    const pagination = useSelector(state => state.pagesReducer)
    const filter = useSelector(state => state.filterReducer)

    const clickHandler = () => {
        dispatch(fetchLoading())
        dispatch(setCurrentPage(parseInt(pageItem)))
        fetchItems(pageItem, pagination.perPage, filter).then(r => {
            dispatch(fetchSuccess())
            dispatch(saveProducts(r.items))
            dispatch(savePages(Math.ceil(r.totalItems / r.perPage)))
        }).catch(err => dispatch(fetchError()))
    }
    if (pagination.currentPage === parseInt(pageItem)) {
        return (
            <div className="pageFocused" onClick={clickHandler}>{pageItem}</div>
        );
    }
    else return <div className="page" onClick={clickHandler}>{pageItem}</div>
}

export default PageNumber;