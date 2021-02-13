import {takeEvery, call, put} from 'redux-saga/effects'
import {saveOrders} from './actions';
import {fetchError, fetchSuccess} from "../products/actions";
import {FETCH_ORDERS} from "./types";
import {fetchItems} from "../products/saga";


export default function* ordersSaga() {
    yield takeEvery(FETCH_ORDERS, onGetOrders)
}

export function* onGetOrders(action) {
    try {
        const origins = yield call(fetchItems, action.payload)
        yield put(saveOrders(origins));
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}


