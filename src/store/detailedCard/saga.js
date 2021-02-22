import {takeEvery, call, put} from 'redux-saga/effects'
import {DETAILED_CARD_FETCH} from "./types";
import {fetchError, fetchSuccess, saveItem} from "./actions";
import {fetchItems} from "../products/saga";


export function* onGetDetailed(action) {
    try {
        const item = yield call(fetchItems, action.payload)
        yield put(saveItem(item));
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}


export default function* detailedItemSaga() {
    yield takeEvery(DETAILED_CARD_FETCH, onGetDetailed)
}
