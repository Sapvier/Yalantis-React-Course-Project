import { takeEvery, call, put } from 'redux-saga/effects'
import {saveItemsCount, setCurrentLimit, setCurrentPage} from "./actions";
import {fetchItems} from "../products/saga";
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../products/actions";
import {PRODUCTS_FETCH_LOADING} from "../products/types";
import {PAGINATION_PAGELIMIT_CHANGE} from "./types";

export function* onGetPagedProducts(action) {
    try {
        yield put(setCurrentPage(action.payload.currentPage));
        const origins = yield call(fetchItems, action.payload)
        yield put(saveProducts(origins.items));
        yield put(saveItemsCount(origins.totalItems))
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}
export function* onGetLimitedProducts(action) {
    try {
        yield put(fetchLoading())
        const origins = yield call(fetchItems, action.payload)
        yield put(setCurrentLimit(action.payload.perPage));
        yield put(saveProducts(origins.items));
        yield put(saveItemsCount(origins.totalItems))
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}

export default function* pagesSaga() {
    yield takeEvery(PRODUCTS_FETCH_LOADING, onGetPagedProducts)
    yield takeEvery(PAGINATION_PAGELIMIT_CHANGE, onGetLimitedProducts)

}



