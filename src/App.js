import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import DetailedItemPage from "./pages/DetailedItemPage";
import CartPage from "./pages/CartPage";
import MyProductsPage from "./pages/MyProductsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import DetailedOrderPage from "./pages/DetailedOrderPage";
import {store} from "./store/configureStoreWithInjectSaga";
import {Provider} from "react-redux";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={ItemsPage} exact/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/myproducts" component={MyProductsPage}/>
                        <Route path="/orders" component={MyOrdersPage} exact/>
                        <Route path="/products/:itemId" component={DetailedItemPage} exact/>
                        <Route path="/orders/:itemId" component={DetailedOrderPage}/>
                    </Switch>
                </div>
            </ BrowserRouter>
        </Provider>
    );
}

export default App;


