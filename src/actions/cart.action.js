import React from 'react'
import axios from '../helper/axios'
import { cartConstant } from './constants';

export const addToCart= (form) => {
    return async dispatch =>
    {
        
        try {
            const res=await axios.post("/user/cart/addtocart",form);
            // console.log(res.data);
            if(res.status==201)
            {
                dispatch({
                    type:cartConstant.ADD_CART_DATA_SUCCESS,
                    payload:res.data.cart.cartItems
                })
            }

        } catch (error) {
            
        }
      
    }
}

export const  fetchCartItems=()=> {
    console.log("fetch cart is called");
    return async dispatch =>
    {
        
        try
        {
            const res=await axios.get("/user/cart/");
            // console.log(
            if(res.status===201)
            {   console.log(res.data.cartItems);
                dispatch({
                    type:cartConstant.GET_CART_DATA_SUCCESS,
                    payload:res.data.cartItems //return array of cart so that we can render no item depending on lenght
                })
            }
        }
        catch(error){

        }
       
    }
}
export const  deleteCartItems=(form)=> {
    console.log("delete cart is called");
    return async dispatch =>
    {
        
        try {
            const res=await axios.post("/user/cart/delete",form);
            // console.log(
            if(res.status===201)
            {   
                return true;
                // console.log(res.data.cartItems);
                // dispatch({
                //     type:cartConstant.GET_CART_DATA_SUCCESS,
                //     payload:res.data.cartItems //return array of cart so that we can render no item depending on lenght
                // })
            }
        } catch (error) {
            
        }
        
       
    }
}
