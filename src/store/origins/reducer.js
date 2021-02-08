import {
    ADD_ORIGIN,
    CHECK_ORIGIN,
    FETCH_FAIL, FETCH_ORIGINS,
    FETCH_SUCCESS,
    REMOVE_ORIGIN,
    SET_MAXPRICE,
    SET_MINPRICE,
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
        case REMOVE_ORIGIN: {
            return {...state, origin: state.origin.filter(item => item !== action.payload)}
        }
        case CHECK_ORIGIN: {
            return {...state, origin: state.origin.concat(action.payload)}
        }
        case UNCHECK_ORIGIN: {
            return {...state, origin: state.origin.concat(action.payload)}
        }
        case SET_MINPRICE: {
            return {...state, price: {...state.price, minPrice: action.payload}}
        }
        case SET_MAXPRICE: {
            return {...state, price: {...state.price, maxPrice: action.payload}}
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