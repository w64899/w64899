import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./reducers";
import allReducers from "./reducers";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"

// const store = createStore(allReducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
