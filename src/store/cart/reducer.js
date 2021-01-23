import {ADD_ITEM} from "./types"

const initialState = {
    items: [],
    fetch: "pending"
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "ADD_ITEM": {
                return {items: state.items.concat([action.payload])}
            }
        case "REMOVE_DUPLICATE": {
            return {items: state.items.filter(item => item.id !== action.payload.id)}
        }
    }
}
