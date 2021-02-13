import {takeEvery, call, put} from 'redux-saga/effects'
import {clearCart, removeFromCart, saveOrderError, saveOrderSuccess} from './actions';
import {CART_ADD_ITEM, CART_ITEM_QUANTITY, CART_SAVE_ORDER} from "./types";
import {fetchItems} from "../products/saga";


export function* onSaveOrder(action) {
    try {
        yield call(fetchItems, action.payload)
        yield put(saveOrderSuccess())
        yield put(clearCart())
    } catch (e) {
        yield put(saveOrderError())
    }
}
export function* onAddItem(payload) {
    yield put(removeFromCart(payload))
}


export default function* cartSaga() {
    yield takeEvery(CART_SAVE_ORDER, onSaveOrder)
    // yield takeEvery([CART_ADD_ITEM, CART_ITEM_QUANTITY], onAddItem)
}


