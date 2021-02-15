import {takeEvery, call, put, fork} from 'redux-saga/effects'
import {patchError, patchSuccess, postError, postSuccess} from './actions';
import {updateItem} from "../products/actions";
import {FORM_PATCH_PROCESSING, FORM_POST_PROCESSING} from "./types";
import {fetchItems} from "../products/saga";


export function* onPatchProduct(action) {
    try {
        const obj = {...action.payload}
        yield fork(fetchItems, obj)
        yield put(patchSuccess());
        yield put(updateItem(action.payload.item))
    } catch (e) {
        yield put(patchError())
    }
}
export function* onPostProduct(action) {
    try {
        yield call(fetchItems, action.payload)
        yield put(postSuccess());
    } catch (e) {
        yield put(postError())
    }
}

export default function* productsFormSaga() {
    yield takeEvery(FORM_PATCH_PROCESSING, onPatchProduct)
    yield takeEvery(FORM_POST_PROCESSING, onPostProduct)
}
