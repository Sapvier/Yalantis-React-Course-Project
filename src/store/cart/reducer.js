import {ADD_ITEM, CLEAR_CART, REMOVE_DUPLICATE} from "./types";
import {SAVE_ERROR, SAVE_ORDER, SAVE_SUCCESS} from "./types";

const initialState = {
    items: [],
    fetch: "pending",
    post: "pending"
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case ADD_ITEM: {
                return {items: state.items.concat([action.payload])}
            }
        case REMOVE_DUPLICATE: {
            return {...state, items: state.items.filter(item => item.id !== action.payload.id)}
        }
        case CLEAR_CART: {
            return {...state, items: []}
        }
        case SAVE_SUCCESS: {
            return {...state, order: "success"}
        }
        case SAVE_ERROR: {
            return {...state, order: "error"}
        }
        case SAVE_ORDER: {
            return {...state, order: "saving"}
        }
    }
}
