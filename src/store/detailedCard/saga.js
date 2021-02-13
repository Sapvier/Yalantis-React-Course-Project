import {takeEvery, call, put} from 'redux-saga/effects'
import {DETAILED_CARD_FETCH_ITEM} from "./types";
import {fetchError, fetchSuccess, saveItem} from "./actions";


export function* onGetDetailed(action) {
    try {
        const item = yield call(fetchItem, action.payload)
        yield put(saveItem(item));
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}

export const fetchItem = async (location) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${location}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.REACT_APP_API_KEY}`,
        },
    })
    return response.json()
}

export default function* detailedItemSaga() {
    yield takeEvery(DETAILED_CARD_FETCH_ITEM, onGetDetailed)
}
