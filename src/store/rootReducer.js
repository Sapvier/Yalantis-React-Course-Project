import {combineReducers} from "redux"
import {productsReducer} from "./products/reducer";
import {cartReducer} from "./cart/reducer";
import {originsReducer} from "./origins/reducer";

export const rootReducer = combineReducers({
    productsReducer: productsReducer,
    cartReducer: cartReducer,
    originsReducer: originsReducer
})