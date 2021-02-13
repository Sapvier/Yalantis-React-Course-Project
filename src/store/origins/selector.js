import {select} from "redux-saga/effects";
import {getFilter} from "../pagination/selector";

export const getOrigins = state => state.filterReducer.origin
export const getPrice = state => state.filterReducer.price


function compare( a, b ) {
    if ( a.value < b.value ){
        return -1;
    }
    if ( a.value > b.value ){
        return 1;
    }
    return 0;
}

export const getSortedOrigins = state => {
    const origins = getOrigins(state)
    return origins.sort( compare );
}
export const getOriginsArray = state => {
    const origins = getOrigins(state)
    let origin = []
    origins.map(item => {
        if (item.isChecked) {
            origin.push(item.value)
        }
    })
    return origin;
}
export const getOriginsString = state => {
    const origins = getOriginsArray(state)
    return origins.join();
}
export const getFilterItems = state => {
    const origins = getOriginsArray(state)
    const pages = getFilter(state)
    const price = getPrice(state)
    return {...pages, ...price, origin: origins}
}




