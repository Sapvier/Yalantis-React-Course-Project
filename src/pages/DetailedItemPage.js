import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import "../components/card/ItemCard.css";
import DetailedItemCard from "../components/card/DetailedItemCard";
import withHeaderAndFooter from "../HOC/withHeaderAndFooter";
import {useInjectSaga} from "../store/injectSaga";
import detailedItemSaga from "../store/detailedCard/saga";
import {useDispatch, useSelector} from "react-redux";
import {fetchItem} from "../store/detailedCard/actions";


function DetailedItemPage() {
    useInjectSaga('detailedItemSaga', detailedItemSaga)
    const dispatch = useDispatch()
    const item = useSelector(state => state.detailedItemReducer.item)
    let location = useLocation();

    useEffect(() => {
        dispatch(fetchItem(location.pathname))
    }, [])

    return (
        <div>
            <DetailedItemCard item={item}/>
        </div>

    );
}

export default withHeaderAndFooter(DetailedItemPage);