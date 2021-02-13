import {
    ORIGINS_ADD_ORIGIN,
    ORIGINS_CHECK_ORIGIN,
    ORIGINS_FETCH_FAIL,
    ORIGINS_FETCH_ORIGINS,
    ORIGINS_FETCH_SUCCESS,
    ORIGINS_MAXPRICE_CHANGE,
    ORIGINS_MINPRICE_CHANGE,
    ORIGINS_ORIGIN_CHANGE,
    ORIGINS_SET_PRICE,
    ORIGINS_UNCHECK_ORIGIN
} from "./types";


export const addOrigins = (origins) => {
    return {
        type: ORIGINS_ADD_ORIGIN,
        payload: origins.map(item => ({...item, isChecked: false}))
    }
}
export const checkOrigin = (origin) => {
    return {
        type: ORIGINS_CHECK_ORIGIN,
        payload: origin
    }
}
export const setPrice = (price) => {
    return {
        type: ORIGINS_SET_PRICE,
        payload: price
    }
}
export const fetchOriginsSuccess = () => {
    return {
        type: ORIGINS_FETCH_SUCCESS
    }
}
export const fetchOriginsFail = () => {
    return {
        type: ORIGINS_FETCH_FAIL
    }
}
export const fetchingOrigins = (payload) => {
    return {
        type: ORIGINS_FETCH_ORIGINS,
        payload: payload
    }
}
export const originChange = (payload) => {
    return {
        type: ORIGINS_ORIGIN_CHANGE,
        payload: payload
    }
}
export const minPriceChange = (payload) => {
    return {
        type: ORIGINS_MINPRICE_CHANGE,
        payload: payload
    }
}
export const maxPriceChange = (payload) => {
    return {
        type: ORIGINS_MAXPRICE_CHANGE,
        payload: payload
    }
}

export const fetchFiltered = (payload) => {
    return {
        type: ORIGINS_UNCHECK_ORIGIN,
        payload: payload
    }
}
