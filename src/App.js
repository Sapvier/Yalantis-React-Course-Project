import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import DetailedItemPage from "./pages/DetailedItemPage";
import CartPage from "./pages/CartPage";


function App() {
    return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={ItemsPage} exact />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/:itemId" component={DetailedItemPage}/>
                    </Switch>
                </div>
            </ BrowserRouter>
    );
}

export default App;


