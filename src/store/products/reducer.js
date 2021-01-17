import {SAVE_PRODUCTS} from "./types"

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "SAVE_PRODUCTS": {
            return {products: action.payload}
        }
    }
}