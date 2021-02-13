import {takeEvery, call, put} from 'redux-saga/effects'
import {DETAILED_ORDER_FETCH_ORDER} from "./types";
import {fetchError, fetchSuccess, saveOrder} from "./actions";


export function* onGetOrder(action) {
    try {
        const order = yield call(fetchOrder, action.payload)
        yield put(saveOrder(order));
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}

export const fetchOrder = async (location) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${location}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.REACT_APP_API_KEY}`,
        },
    })
    return response.json()
}

export default function* detailedOrderSaga() {
    yield takeEvery(DETAILED_ORDER_FETCH_ORDER, onGetOrder)
}




