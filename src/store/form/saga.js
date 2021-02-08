import {takeEvery, call, put} from 'redux-saga/effects'
import {patchError, patchSuccess, postError, postSuccess} from './actions';
import {updateItem} from "../products/actions";
import {PATCH_PROCESSING, POST_PROCESSING} from "./types";


export default function* productsFormSaga() {
    yield takeEvery(PATCH_PROCESSING, onPatchProduct)
    yield takeEvery(POST_PROCESSING, onPostProduct)
}

export function* onPatchProduct(action) {
    try {
        yield call(patchItem, action.payload)
        yield put(patchSuccess());
        yield put(updateItem(action.payload))
    } catch (e) {
        yield put(patchError())
    }
}
export function* onPostProduct(action) {
    try {
        yield call(postItem, action.payload)
        yield put(postSuccess());
    } catch (e) {
        yield put(postError())
    }
}


export const patchItem = async (product) => await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products/${product.id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
    },
    body: JSON.stringify(product)
});

export const postItem = async (item) => await fetch('https://yalantis-react-school-api.yalantis.com/api/v1/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
    },
    body: JSON.stringify(item)
});