export const addOrigins = (origins) => {
    return {
        type: "ADD_ORIGIN",
        payload: origins
    }
}
export const removeOrigin = (origin) => {
    return {
        type: "REMOVE_ORIGIN",
        payload: origin
    }
}
export const checkOrigin = (origin) => {
    return {
        type: "CHECK_ORIGIN",
        payload: {...origin, isChecked: true}
    }
}
export const unCheckOrigin = (origin) => {
    return {
        type: "UNCHECK_ORIGIN",
        payload: {...origin, isChecked: false}
    }
}
export const setMinPrice = (price) => {
    return {
        type: "SET_MINPRICE",
        payload: price
    }
}
export const setMaxPrice = (price) => {
    return {
        type: "SET_MAXPRICE",
        payload: price
    }
}