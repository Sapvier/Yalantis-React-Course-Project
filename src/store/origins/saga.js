import {takeEvery, call, put, select, debounce} from 'redux-saga/effects'
import {
    addOrigins,
    checkOrigin, fetchFiltered,
    fetchOriginsFail,
    fetchOriginsSuccess,
    setPrice
} from './actions';
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../products/actions";
import {fetchItems} from "../products/saga";
import {saveItemsCount} from "../pagination/actions";
import {
    FETCH_FILTER,
    FETCH_ORIGINS, MAXPRICE_CHANGE, MINPRICE_CHANGE,
    ORIGIN_CHANGE
} from "./types";
import {getOriginsArray} from "./selector";


export function* onGetOrigins(action) {
    try {
        const origins = yield call(fetchItems, action.payload)
        yield put(addOrigins(origins.items));
        yield put(fetchOriginsSuccess())
        yield put(setPrice(action.payload.price))
        yield put(fetchFiltered(action.payload.origin.split(',')))
    } catch (e) {
        yield put(fetchOriginsFail())
    }
}

export function* onGetPrice(action) {
    try {
        yield put(setPrice(action.payload.price))
        const origins = yield call(fetchItems, action.payload)
        // yield put({type: "PRODUCTS/FETCH_SUCCESS", payload: origins})
        yield put(saveProducts(origins.items));
        yield put(saveItemsCount(origins.totalItems))

    } catch (e) {
        yield put(fetchError())
    }
}


export function* onCheckOrigin(action) {
    try {
        yield put(checkOrigin(action.payload.origin))
        const origins = yield select(getOriginsArray)
        const filterItems = yield {
            path: `/products`,
            method: 'GET',
            filter: `?page=${action.payload.filterItems.currentPage}&perPage=${action.payload.filterItems.perPage}&origins=${origins}&minPrice=${action.payload.filterItems.minPrice}&maxPrice=${action.payload.filterItems.maxPrice}&editable=${action.payload.isEditable}`
        }
        const products = yield call(fetchItems, filterItems)
        yield put(fetchSuccess())
        yield put(saveProducts(products.items));
        yield put(saveItemsCount(products.totalItems))
    } catch (e) {
        yield put(fetchError())
    }
}

export function* onGetFilter(action) {
    try {

        yield put(fetchLoading())
        const origins = yield call(fetchItems, action.payload)
        yield put(saveProducts(origins.items));
        yield put(saveItemsCount(origins.totalItems))
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}


export default function* originsSaga() {
    yield takeEvery(FETCH_ORIGINS, onGetOrigins)
    yield takeEvery(FETCH_FILTER, onGetFilter)
    yield debounce(2000, [MINPRICE_CHANGE,MAXPRICE_CHANGE], onGetPrice)
    yield takeEvery(ORIGIN_CHANGE, onCheckOrigin)
    // yield takeLatest("PRODUCTS/FETCH_SUCCESS", onFetchSuccess)

}