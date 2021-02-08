import { takeEvery, call, put } from 'redux-saga/effects'
import {savePages, setCurrentLimit, setCurrentPage} from "./actions";
import {fetchItems} from "../products/saga";
import {fetchError, fetchSuccess, saveProducts} from "../products/actions";
import {UPDATE_LOADING} from "../products/types";
import {FETCH_PAGELIMIT} from "./types";


export default function* pagesSaga() {
    yield takeEvery(UPDATE_LOADING, onGetPagedProducts)
    yield takeEvery(FETCH_PAGELIMIT, onGetLimitedProducts)
}

export function* onGetPagedProducts(action) {
    try {
        const origins = yield call(fetchItems, action.payload)
        yield put(setCurrentPage(action.payload.currentPage));
        yield put(saveProducts(origins.items));
        yield put(savePages(Math.ceil(origins.totalItems / origins.perPage)))
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}
export function* onGetLimitedProducts(action) {
    try {
        const origins = yield call(fetchItems, action.payload)
        yield put(setCurrentLimit(action.payload.perPage));
        yield put(saveProducts(origins.items));
        yield put(savePages(Math.ceil(origins.totalItems / origins.perPage)))
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}



