import handleCart from "./handleCart";
import AuthReducer from './auth'
import messageReducer from "./message";
import { combineReducers } from 'redux';


const rootReducers =  combineReducers({
    handleCart,
    AuthReducer,
    messageReducer
})

export default rootReducers;