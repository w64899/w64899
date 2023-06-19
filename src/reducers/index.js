import LoginReducer from "./LoginReducer";
import LoggedReducer from "./LoggedReducer";
import Cart from "./Cart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login: LoginReducer,
    logged: LoggedReducer,
    cart: Cart
})

export default allReducers