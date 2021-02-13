import {
    DETAILED_CARD_FETCH_ERROR,
    DETAILED_CARD_FETCH_ITEM,
    DETAILED_CARD_FETCH_SUCCESS,
    DETAILED_CARD_SAVE_ITEM
} from "./types";

export function saveItem(item) {
    return {
        type: DETAILED_CARD_SAVE_ITEM,
        payload: item
    }
}
export const fetchSuccess = () => {
    return {
        type: DETAILED_CARD_FETCH_SUCCESS
    }
}
export const fetchError = () => {
    return {
        type: DETAILED_CARD_FETCH_ERROR
    }
}
export const fetchItem = () => {
    return {
        type: DETAILED_CARD_FETCH_ITEM
    }
}