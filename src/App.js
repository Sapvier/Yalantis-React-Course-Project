import React from 'react';
import ItemsList from "./components/common/ItemsList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShoppingCart from "./components/cart/ShoppingCart";
import DetailedItemCard from "./components/card/DetailedItemCard";
import ItemsContextProvider from "./ItemsContext";

function App() {

    return (
        <ItemsContextProvider>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={ItemsList} exact />
                        <Route path="/cart" component={ShoppingCart} />
                        <Route path="/:itemId" component={DetailedItemCard}/>
                    </Switch>
                </div>
            </ BrowserRouter>
        </ ItemsContextProvider>
    );
}

export default App;


