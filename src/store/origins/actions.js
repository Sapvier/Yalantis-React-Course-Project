export const addOrigin = (origin) => {
    return {
        type: "ADD_ORIGIN",
        payload: origin
    }
}
export const removeOrigin = (origin) => {
    return {
        type: "REMOVE_ORIGIN",
        payload: origin
    }
}