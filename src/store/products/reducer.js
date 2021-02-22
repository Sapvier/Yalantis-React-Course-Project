import {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCH_LOADING,
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_SAVE_PRODUCTS,
    PRODUCTS_UPDATE_ITEM
} from "./types";

const initialState = {
    products: [],
    fetch: "pending"
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case PRODUCTS_SAVE_PRODUCTS: {
            return {...state, products: action.payload}
        }
        case PRODUCTS_FETCH_SUCCESS: {
            return {...state, fetch: "success"}
        }
        case PRODUCTS_FETCH_ERROR: {
            return {...state, fetch: "error"}
        }
        case PRODUCTS_FETCH_LOADING: {
            return {...state, fetch: "loading"}
        }
        case PRODUCTS_UPDATE_ITEM:
            return {
                ...state, products: state.products.map(item => {
                    if (item.id === action.payload.id) {

                        return action.payload;
                    }
                    return item;
                }),
            };
    }
}