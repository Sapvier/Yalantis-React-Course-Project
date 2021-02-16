import productsSaga from "./products/saga";
import pagesSaga from "./pagination/saga";
import originsSaga from "./origins/saga";
import ordersSaga from "./orders/saga";
import productsFormSaga from "./form/saga";
import detailedOrderSaga from "./detailedOrder/saga";
import cartSaga from "./cart/saga";
import detailedItemSaga from "./detailedCard/saga";

export default function* rootSaga() {
    yield ([productsSaga(), pagesSaga(), originsSaga(), ordersSaga(), productsFormSaga(), detailedOrderSaga(), cartSaga(), detailedItemSaga()]);
};