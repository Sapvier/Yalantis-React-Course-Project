import {
    FETCH_ERROR,
    FETCH_ITEM,
    FETCH_SUCCESS,
    SAVE_ITEM
} from "./types";

export function saveItem(item) {
    return {
        type: SAVE_ITEM,
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
        type: FETCH_ITEM
    }
}