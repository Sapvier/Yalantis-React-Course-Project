import {combineReducers} from "redux"
import {productsReducer} from "./products/reducer";
import {cartReducer} from "./cart/reducer";
import {filterReducer} from "./origins/reducer";
import {pagesReducer} from "./pagination/reducer";

export const rootReducer = combineReducers({
    productsReducer: productsReducer,
    cartReducer: cartReducer,
    filterReducer: filterReducer,
    pagesReducer: pagesReducer
})