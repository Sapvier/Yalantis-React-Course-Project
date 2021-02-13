import {
    ADD_ORIGIN,
    CHECK_ORIGIN,
    FETCH_FAIL, FETCH_ORIGINS,
    FETCH_SUCCESS,
    SET_MINPRICE, SET_PRICE,
    UNCHECK_ORIGIN
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
        case ADD_ORIGIN: {
            return {...state, origin: state.origin.concat(action.payload)}
        }
        case CHECK_ORIGIN: {
            return {
                ...state,
                origin: state.origin.map(item => item.value === action.payload.value ? {...item, isChecked: !item.isChecked} : item)}
        }
        case UNCHECK_ORIGIN: {
            return {
                ...state,
                origin: state.origin.map(item => action.payload.includes(item.value) ? {...item, isChecked: true} : item)
            }
        }
        case SET_MINPRICE: {
            return {...state, price: {...state.price, minPrice: action.payload}}
        }
        case SET_PRICE: {
            return {...state, price: {...action.payload}}
        }
        case FETCH_SUCCESS: {
            return {...state, fetchStatus: 'success'}
        }
        case FETCH_FAIL: {
            return {...state, fetchStatus: 'fail'}
        }
        case FETCH_ORIGINS: {
            return {...state, fetchStatus: 'fetching'}
        }
    }
}