import {takeEvery, call, put} from 'redux-saga/effects'
import {patchError, patchSuccess, postError, postSuccess} from './actions';
import {updateItem} from "../products/actions";
import {PATCH_PROCESSING, POST_PROCESSING} from "./types";
import {fetchItems} from "../products/saga";


export default function* productsFormSaga() {
    yield takeEvery(PATCH_PROCESSING, onPatchProduct)
    yield takeEvery(POST_PROCESSING, onPostProduct)
}

export function* onPatchProduct(action) {
    try {
        yield call(fetchItems, action.payload)
        yield put(patchSuccess());
        yield put(updateItem(action.payload))
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
