import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from "redux";
import {rootReducer} from "./store/rootReducer";

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App classname="body"/>
    </Provider>,
    rootElement
)