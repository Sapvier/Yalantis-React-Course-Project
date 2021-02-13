import {
    ADD_ORIGIN,
    CHECK_ORIGIN,
    FETCH_FAIL,
    FETCH_ORIGINS,
    FETCH_SUCCESS,
    MAXPRICE_CHANGE,
    MINPRICE_CHANGE,
    ORIGIN_CHANGE,
    SET_PRICE, UNCHECK_ORIGIN
} from "./types";

export const addOrigins = (origins) => {
    return {
        type: ADD_ORIGIN,
        payload: origins.map(item => ({...item, isChecked: false}))
    }
}
export const checkOrigin = (origin) => {
    return {
        type: CHECK_ORIGIN,
        payload: origin
    }
}
export const setPrice = (price) => {
    return {
        type: SET_PRICE,
        payload: price
    }
}
export const fetchOriginsSuccess = () => {
    return {
        type: FETCH_SUCCESS
    }
}
export const fetchOriginsFail = () => {
    return {
        type: FETCH_FAIL
    }
}
export const fetchingOrigins = (payload) => {
    return {
        type: FETCH_ORIGINS,
        payload: payload
    }
}
export const originChange = (payload) => {
    return {
        type: ORIGIN_CHANGE,
        payload: payload
    }
}
export const minPriceChange = (payload) => {
    return {
        type: MINPRICE_CHANGE,
        payload: payload
    }
}
export const maxPriceChange = (payload) => {
    return {
        type: MAXPRICE_CHANGE,
        payload: payload
    }
}

export const fetchFiltered = (payload) => {
    return {
        type: UNCHECK_ORIGIN,
        payload: payload
    }
}
