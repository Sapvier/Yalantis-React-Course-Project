import {takeEvery, call, put, select} from 'redux-saga/effects'
import {buyItem, clearCart, saveOrderError, saveOrderSuccess} from './actions';
import {ADD_TO_CART, CART_SAVE_ORDER} from "./types";
import {fetchItems} from "../products/saga";
import {getCartItems} from "./selector";


export function* onSaveOrder(action) {
    try {
        yield call(fetchItems, action.payload)
        yield put(saveOrderSuccess())
        yield put(clearCart())
    } catch (e) {
        yield put(saveOrderError())
    }
}
export function* onAddItem(action) {
   const cart = yield select(getCartItems)
    let productAlreadyInCart = false;
    cart.forEach((item) => {
        if (item.id === action.payload.id) {
            item.quantity += 1;
            productAlreadyInCart = true;
        }
    });
    if (!productAlreadyInCart) {
        cart.push({ ...action.payload, quantity: 1 });
    }
    yield put(buyItem({cart}))
}



export default function* cartSaga() {
    yield takeEvery(CART_SAVE_ORDER, onSaveOrder)
    yield takeEvery(ADD_TO_CART, onAddItem)
}


