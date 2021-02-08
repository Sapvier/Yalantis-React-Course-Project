import productsSaga from "./products/saga";
import pagesSaga from "./pagination/saga";
import originsSaga from "./origins/saga";
import ordersSaga from "./orders/saga";
import productsFormSaga from "./form/saga";

export default function* rootSaga() {
    yield ([productsSaga(), pagesSaga(), originsSaga(), ordersSaga(), productsFormSaga()]);
};