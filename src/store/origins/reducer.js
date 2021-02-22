import {
    ORIGINS_ADD_ORIGIN,
    ORIGINS_CHECK_ORIGIN,
    ORIGINS_FETCH_FAIL,
    ORIGINS_FETCH_ORIGINS,
    ORIGINS_FETCH_SUCCESS,
    ORIGINS_SET_MINPRICE,
    ORIGINS_SET_PRICE,
    ORIGINS_UNCHECK_ORIGIN
} from "./types";

const initialState = {
    price: {
        minPrice: 1,
        maxPrice: null
    },
    origin: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case ORIGINS_ADD_ORIGIN: {
            return {...state, origin: state.origin.concat(action.payload)}
        }
        case ORIGINS_CHECK_ORIGIN: {
            return {
                ...state,
                origin: state.origin.map(item => item.value === action.payload.value ? {...item, isChecked: !item.isChecked} : item)}
        }
        case ORIGINS_UNCHECK_ORIGIN: {
            return {
                ...state,
                origin: state.origin.map(item => action.payload.includes(item.value) ? {...item, isChecked: true} : item)
            }
        }
        case ORIGINS_SET_MINPRICE: {
            return {...state, price: {...state.price, minPrice: action.payload}}
        }
        case ORIGINS_SET_PRICE: {
            return {...state, price: {...action.payload}}
        }
        case ORIGINS_FETCH_SUCCESS: {
            return {...state, fetchStatus: 'success'}
        }
        case ORIGINS_FETCH_FAIL: {
            return {...state, fetchStatus: 'fail'}
        }
        case ORIGINS_FETCH_ORIGINS: {
            return {...state, fetchStatus: 'fetching'}
        }
    }
}