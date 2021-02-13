import {
    FETCH_ERROR,
    FETCH_LOADING, FETCH_SUCCESS,
    SAVE_PRODUCTS,
    UPDATE_ITEM,
} from "./types";

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
        case FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case FETCH_LOADING: {
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