import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
 } from './types'
 import axios from "axios";

 const API_URL = "https://fakestoreapi.com/";
 const getRegister = (username, email, password,address,name, phone) => {
   return axios.post(API_URL + "users", {
     username,
     email,
     password,
     address,
     name,
     phone
   });
 };
export const Register = (username, email, password,address,name, phone)=> (dispatch)=>{
    return getRegister(username, email, password,address,name, phone).then(
            (response)=>{
                dispatch({
                    type: REGISTER_SUCCESS
                })
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message
                })
                return Promise.resolve()
            },
            (error)=>{
                const message = (error.response && error.response.data && error.message.data.message) || error.toString()
                dispatch({
                    type: REGISTER_FAIL
                })
                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                })
                return Promise.reject();
            }

        )
    
}


export const AddCart = (product)=>{
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const DelCart = (product)=>{
    return{
        type: "DELITEM",
        payload: product
    }
}


export const INCREMENTCart = (count)=>{
    return {
        type: "INCREMENT",
        payload: count
    }
}