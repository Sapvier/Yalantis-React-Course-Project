import {SAVE_PRODUCTS, UPDATE_ERROR, UPDATE_ITEM, UPDATE_LOADING, UPDATE_SUCCESS} from "./types";

const initialState = {
    products: [],
    fetch: "pending"
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_PRODUCTS: {
            return {...state, products: action.payload}
        }
        case UPDATE_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case UPDATE_ERROR: {
            return {...state, fetch: "error"}
        }
        case UPDATE_LOADING: {
            return {...state, fetch: "loading"}
        }
        case UPDATE_ITEM:
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                }),
            };
    }
}