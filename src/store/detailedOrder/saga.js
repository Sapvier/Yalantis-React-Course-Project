import {takeEvery, call, put} from 'redux-saga/effects'
import {DETAILED_ORDER_FETCH} from "./types";
import {fetchError, fetchSuccess, saveOrder} from "./actions";
import {fetchItems} from "../products/saga";


export function* onGetOrder(action) {
    try {
        const order = yield call(fetchItems, action.payload)
        yield put(saveOrder(order));
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}


export default function* detailedOrderSaga() {
    yield takeEvery(DETAILED_ORDER_FETCH, onGetOrder)
}




