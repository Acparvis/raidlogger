import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import state from "./data/reducers";

import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {PersistGate} from 'redux-persist/integration/react'

// const store = createStore(state, composeEnhancers(applyMiddleware(thunk)));

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, state);

let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        {/*<PersistGate loading={null} persistor={persistor}>*/}
            <App/>
        {/*</PersistGate>*/}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
