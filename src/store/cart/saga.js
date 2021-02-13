import {takeEvery, call, put} from 'redux-saga/effects'
import {clearCart, saveOrderError, saveOrderSuccess} from './actions';
import {SAVE_ORDER} from "./types";
import {fetchItems} from "../products/saga";


export default function* cartSaga() {
    yield takeEvery(SAVE_ORDER, onSaveOrder)
}

export function* onSaveOrder(action) {
    try {
        yield call(fetchItems, action.payload)
        yield put(saveOrderSuccess())
        yield put(clearCart())
    } catch (e) {
        yield put(saveOrderError())
    }
}

