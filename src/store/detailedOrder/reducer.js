import {FETCH_ERROR, FETCH_ORDER, FETCH_SUCCESS, SAVE_ORDER} from "./types";


const initialState = {
    order: [],
    fetch: "pending"
}

export const detailedOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_ORDER: {
            return {...state, order: action.payload}
        }
        case FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case FETCH_ORDER: {
            return {...state, fetch: "fetching"}
        }
    }
}