import {ADD_ORIGIN} from "./types"

const initialState = []

export const originsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "ADD_ORIGIN": {
            return state.concat(action.payload)
        }
        case "REMOVE_ORIGIN": {
            return state.filter(item => item !== action.payload)
        }
    }
}