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

export const addOrigins = (origins) => {
    return {
        type: ADD_ORIGIN,
        payload: origins.map(item => ({...item, isChecked: false}))
    }
}
export const removeOrigin = (origin) => {
    return {
        type: REMOVE_ORIGIN,
        payload: origin
    }
}
export const checkOrigin = (origin) => {
    return {
        type: CHECK_ORIGIN,
        payload: {...origin, isChecked: true}
    }
}
export const unCheckOrigin = (origin) => {
    return {
        type: UNCHECK_ORIGIN,
        payload: {...origin, isChecked: false}
    }
}
export const setMinPrice = (price) => {
    return {
        type: SET_MINPRICE,
        payload: price
    }
}
export const setMaxPrice = (price) => {
    return {
        type: SET_MAXPRICE,
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
export const fetchingOrigins = () => {
    return {
        type: FETCH_ORIGINS
    }
}