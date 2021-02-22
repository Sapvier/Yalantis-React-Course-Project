import {combineReducers} from "redux"
import {productsReducer} from "./products/reducer";
import {cartReducer} from "./cart/reducer";
import {filterReducer} from "./origins/reducer";
import {pagesReducer} from "./pagination/reducer";
import {formReducer} from "./form/reducer";
import {ordersReducer} from "./orders/reducer";
import {detailedItemReducer} from "./detailedCard/reducer";
import {detailedOrderReducer} from "./detailedOrder/reducer";

export const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
    filterReducer,
    pagesReducer,
    formReducer,
    ordersReducer,
    detailedItemReducer,
    detailedOrderReducer
})