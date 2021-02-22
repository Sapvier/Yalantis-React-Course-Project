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
export const checkOrigin = (payload) => ({type: ORIGINS_CHECK_ORIGIN, payload})

export const setPrice = (payload) => ({type: ORIGINS_SET_PRICE, payload})

export const fetchOriginsSuccess = () => ({type: ORIGINS_FETCH_SUCCESS})

export const fetchOriginsFail = () => ({type: ORIGINS_FETCH_FAIL})

export const fetchingOrigins = (payload) => ({type: ORIGINS_FETCH_ORIGINS, payload})

export const originChange = (payload) => ({type: ORIGINS_ORIGIN_CHANGE, payload})

export const minPriceChange = (payload) => ({type: ORIGINS_MINPRICE_CHANGE, payload})

export const maxPriceChange = (payload) => ({type: ORIGINS_MAXPRICE_CHANGE, payload})

export const fetchFiltered = (payload) => ({type: ORIGINS_UNCHECK_ORIGIN, payload})


