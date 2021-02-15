import {takeEvery, call, put, select, debounce, delay} from 'redux-saga/effects'
import {
    addOrigins,
    checkOrigin,
    fetchFiltered,
    fetchOriginsFail,
    fetchOriginsSuccess,
    setPrice
} from './actions';
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../products/actions";
import {fetchItems} from "../products/saga";
import {saveItemsCount} from "../pagination/actions";
import {
    ORIGINS_FETCH_FILTER,
    ORIGINS_FETCH_ORIGINS,
    ORIGINS_MAXPRICE_CHANGE,
    ORIGINS_MINPRICE_CHANGE,
    ORIGINS_ORIGIN_CHANGE
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
        const filterItems = yield {
            path: `/products`,
            method: 'GET',
            filter: `?page=${action.payload.filterItems.currentPage}&perPage=${action.payload.filterItems.perPage}&origins=${action.payload.filterItems.origin}&minPrice=${action.payload.price.minPrice}&maxPrice=${action.payload.price.maxPrice}&editable=${action.payload.isEditable}`}
        const origins = yield call(fetchItems, filterItems)
        yield put(fetchSuccess())
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
        yield delay(2000)
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
    yield takeEvery(ORIGINS_FETCH_ORIGINS, onGetOrigins)
    yield takeEvery(ORIGINS_FETCH_FILTER, onGetFilter)
    yield debounce(2000, [ORIGINS_MINPRICE_CHANGE, ORIGINS_MAXPRICE_CHANGE], onGetPrice)
    yield takeEvery(ORIGINS_ORIGIN_CHANGE, onCheckOrigin)
}