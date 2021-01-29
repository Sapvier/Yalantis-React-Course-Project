import {combineReducers} from "redux"
import {productsReducer} from "./products/reducer";
import {cartReducer} from "./cart/reducer";
import {filterReducer} from "./origins/reducer";
import {pagesReducer} from "./pagination/reducer";
import {formReducer} from "./form/reducer";
import {ordersReducer} from "./orders/reducer";

export const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
    filterReducer,
    pagesReducer,
    formReducer,
    ordersReducer
})