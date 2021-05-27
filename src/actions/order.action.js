// import axios from 'axios'
import React from 'react'
import axios from '../helper/axios'
import { orderConstant } from './constants';

export const fetchAllOrders= () => {
    return async dispatch => {

        try{
            const res =await axios.get("order/fetchorders");
        if(res.status==201)
        {   console.log("orders  are")
            console.log(res.data);
            dispatch({
                type:orderConstant.GET_ORDER_DATA_SUCCESS,
                payload:res.data.allOrder
            })
            // console.log(res.data);
        }
        }
        catch(error)
        {

        }
        
    }
}


export const placeOrder=(form)=>
{
    return async dispatch => {
        console.log("place order is called");
        try {
            const res =await axios.post("order/placeorder",form);
        console.log(res);
        if(res.status==201)
        {
            console.log(res.data.allOrder);
            // dispatch({
            //     type:orderConstant.GET_ORDER_DATA_SUCCESS,
            //     payload:res.data.allOrder
            // })
        }
        } catch (error) {
            
        }
        
    }

}

export const cancleOrder=(form)=>
{
    return async dispatch => {
        console.log("cancle order is called");
        
        try {
            const res =await axios.post("order/cancleorder",form);
            console.log(res);
            if(res.status==201)
            {
                console.log(res.data.allOrder);
                dispatch({
                    type:orderConstant.DELETE_ORDER_DATA_SUCCESS,
                    payload:res.data.allOrder
                })
            }
        } catch (error) {
            
        }
       
    }

}
