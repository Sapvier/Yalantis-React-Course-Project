import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchError, fetchSuccess, saveProducts} from './actions';
import {FETCH_LOADING} from "./types";
import {saveItemsCount, savePages} from "../pagination/actions";
import {fetchFiltered, filterOrigin, setPrice} from "../origins/actions";


export default function* productsSaga() {
    yield takeEvery(FETCH_LOADING, onGetProducts)
}

export function* onGetProducts(action) {
    try {
        const origins = yield call(fetchItems, action.payload)
        yield put(fetchSuccess())
        yield put(saveProducts(origins.items));
        yield put(saveItemsCount(origins.totalItems))
    } catch (e) {
        yield put(fetchError())
    }
}

export const fetchItems = async (filterItems) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${filterItems.path}${filterItems.filter}`, {
        method: `${filterItems.method}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.REACT_APP_API_KEY}`,
        },
        body: filterItems.data
    })
    return response.json()
}

