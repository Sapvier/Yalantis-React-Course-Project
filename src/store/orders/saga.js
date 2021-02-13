import {takeEvery, call, put} from 'redux-saga/effects'
import {fetchOrdersError, fetchOrdersSuccess, saveOrders} from './actions';
import {ORDERS_FETCH_ORDERS} from "./types";
import {fetchItems} from "../products/saga";


export function* onGetOrders(action) {
    try {
        const origins = yield call(fetchItems, action.payload)
        yield put(saveOrders(origins));
        yield put(fetchOrdersSuccess())
    } catch (e) {
        yield put(fetchOrdersError())
    }
}

export default function* ordersSaga() {
    yield takeEvery(ORDERS_FETCH_ORDERS, onGetOrders)
}


