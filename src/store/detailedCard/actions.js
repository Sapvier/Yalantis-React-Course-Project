import {
    DETAILED_CARD_FETCH,
    DETAILED_CARD_FETCH_ERROR,
    DETAILED_CARD_FETCH_SUCCESS,
    DETAILED_CARD_SAVE_ITEM

} from "./types";

export const saveItem = (payload) => ({type: DETAILED_CARD_SAVE_ITEM, payload})

export const fetchItemLoading = (payload) => ({type: DETAILED_CARD_FETCH, payload})

export const fetchSuccess = () => ({type: DETAILED_CARD_FETCH_SUCCESS})

export const fetchError = () => ({type: DETAILED_CARD_FETCH_ERROR})

