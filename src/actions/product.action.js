import axios from "../helper/axios"
import { productConstants } from "./constants";

export const getProductBySlug=(slug)=>
{
    return async dispatch =>
    {   
        const url="/products/"+slug;
        
        try {
            const res=await axios.get(url);
        if(res.status===200)
        {
            dispatch({
                type:productConstants.GET_PRODUCTS_BY_SLUG,
                payload:res.data
            })
        }
        else
        {
            // dispatch({
                
            // })
        }
        } catch (error) {
            
        }
        
        
    }
}

export const getRandomProduct=()=>
{   console.log("random product is called");
    return async dispatch =>
    {
        
        try {
            const res= await axios.get("/product/random");
            console.log(res);
            if(res.status===201)
            {
                dispatch({
                    type:productConstants.GET_RANDOM_PRODUCT_SUCCESS,
                    payload:res.data.RandomProductList
                })
                return true;
            }
            else{
                return false
            }
    

        } catch (error) {
            
        }
       
    }
}