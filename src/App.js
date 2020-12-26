import React, {useState} from 'react';
import ItemsList from "./Components/ItemsList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Bin from "./Components/Bin";
import DetailedCard from "./Components/DetailedCard";
import {Context} from "./context";

function App() {
    const [addedItems, setAddedItems] = useState([])

    const addItem = item => {
        setAddedItems([...addedItems, item])
    }


    return (
        <Context.Provider value={{addItem, addedItems}}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={ItemsList} exact />
                        <Route path="/bin" component={Bin} />
                        <Route path="/:itemId" component={DetailedCard}/>
                    </Switch>
                </div>
            </ BrowserRouter>
        </Context.Provider>
    );
}

export default App;


