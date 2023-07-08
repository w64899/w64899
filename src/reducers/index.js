import LoginReducer from "./LoginReducer";
import LoggedReducer from "./LoggedReducer";
import Cart from "./Cart";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import Favourite from "./favouriteReducer";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const allReducers = combineReducers({
    login: LoginReducer,
    logged: LoggedReducer,
    cart: Cart,
    fav: Favourite,
})

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
    reducer: persistedReducer
})

export default allReducers