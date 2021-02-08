import {takeEvery, call, put} from 'redux-saga/effects'
import {saveOrders} from './actions';
import {fetchError, fetchSuccess} from "../products/actions";
import {FETCH_ORDERS} from "./types";


export default function* ordersSaga() {
    yield takeEvery(FETCH_ORDERS, onGetOrders)
}

export function* onGetOrders() {
    try {
        const origins = yield call(fetchOrders)
        yield put(saveOrders(origins));
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}


export const fetchOrders = async () => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/orders`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
        },
    })
    return response.json()
}