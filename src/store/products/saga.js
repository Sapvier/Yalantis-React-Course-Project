import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchError, fetchSuccess, saveProducts} from './actions';
import {UPDATE_LOADING} from "./types";
import {savePages} from "../pagination/actions";


export default function* productsSaga() {
    yield takeEvery(UPDATE_LOADING, onGetProducts)
}

export function* onGetProducts(action) {
    try {
        const origins = yield call(fetchItems, action.payload)
        yield put(saveProducts(origins.items));
        yield put(savePages(Math.ceil(origins.totalItems / origins.perPage)))
        yield put(fetchSuccess())
    } catch (e) {
        yield put(fetchError())
    }
}

export const fetchItems = async (filterItems) => {
    const response = await fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products?page=${filterItems.currentPage}&perPage=${filterItems.perPage}&origins=${filterItems.origin}&minPrice=${filterItems.minPrice}&maxPrice=${filterItems.maxPrice}&editable=${filterItems.isEditable}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCW0LXQu9C10LfQvdC40Lkg0JTQtdC90LjRgSIsImlhdCI6MTYxMTE3NDA0MiwiZXhwIjoxNjE2MzU4MDQyfQ.Ou4KHwLGV2IC1W4keq9toJjbsNaRfI2WkEc3NetnDmY',
        },
    })

    return response.json()
}

