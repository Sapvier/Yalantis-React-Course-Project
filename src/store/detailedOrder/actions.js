import {
    FETCH_ERROR,
    FETCH_ORDER,
    FETCH_SUCCESS,
    SAVE_ORDER
} from "./types";

export function saveOrder(item) {
    return {
        type: SAVE_ORDER,
        payload: item
    }
}
export const fetchSuccess = () => {
    return {
        type: FETCH_SUCCESS
    }
}
export const fetchError = () => {
    return {
        type: FETCH_ERROR
    }
}
export const fetchItem = () => {
    return {
        type: FETCH_ORDER
    }
}