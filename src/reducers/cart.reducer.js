import React from 'react'
import { cartConstant } from '../actions/constants';
import axios from '../helper/axios';

const initState={
    cartItems:[]
} 



export default (state=initState,action) => {
    switch(action.type)
    {
        case cartConstant.GET_CART_DATA_SUCCESS:
            
            state={
                cartItems:action.payload
            };
            break;
        case cartConstant.ADD_CART_DATA_SUCCESS:
            
            state={
                cartItems:action.payload
            };
            break;

    }
    return state;
    
}
