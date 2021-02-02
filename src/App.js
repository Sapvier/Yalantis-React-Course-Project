import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import DetailedItemPage from "./pages/DetailedItemPage";
import CartPage from "./pages/CartPage";
import MyProductsPage from "./pages/MyProductsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import DetailedOrderPage from "./pages/DetailedOrderPage";


function App() {
    return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={ItemsPage} exact />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/myproducts" component={MyProductsPage}/>
                        <Route path="/orders" component={MyOrdersPage} exact/>
                        <Route path="/:itemId" component={DetailedItemPage}/>
                        <Route path="/orders/:itemId" component={DetailedOrderPage}/>
                    </Switch>
                </div>
            </ BrowserRouter>
    );
}

export default App;


