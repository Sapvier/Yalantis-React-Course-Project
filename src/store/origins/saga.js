import { takeEvery, call, put } from 'redux-saga/effects'
import {addOrigins, fetchOriginsFail, fetchOriginsSuccess} from './actions';
import {fetchError, fetchLoading, fetchSuccess, saveProducts} from "../products/actions";
import {fetchItems} from "../products/saga";
import {savePages} from "../pagination/actions";
import {FETCH_FILTER, FETCH_ORIGINS} from "./types";

export default function* originsSaga() {
    yield takeEvery(FETCH_ORIGINS, onGetOrigins)
    yield takeEvery(FETCH_FILTER, onGetFilter)
}

export function* onGetOrigins() {
    try {
        const origins = yield call(fetchOrigins)
        yield put(addOrigins(origins.items));
        yield put(fetchOriginsSuccess())
    } catch (e) {
        yield put(fetchOriginsFail())
    }
}


export function* onGetFilter(action) {
    try {
        yield put(fetchLoading())
        const origins = yield call(fetchItems, action.payload)
        yield put(saveProducts(origins.items));
        yield put(savePages(Math.ceil(origins.totalItems / origins.perPage)))
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}


// export function* onGetMyFilter(action) {
//     try {
//         yield put(fetchLoading())
//         const origins = yield call(fetchMyProducts, action.payload)
//         yield put(saveProducts(origins.items));
//         yield put(savePages(Math.ceil(origins.totalItems / origins.perPage)))
//         yield put(fetchSuccess())
//     } catch (e) {
//         yield put(fetchError())
//     }
// }

export const fetchOrigins = async () => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products-origins`)
    return response.json()
}
