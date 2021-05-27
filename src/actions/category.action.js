import axios from "../helper/axios"
import { categoryConstants } from "./constants"
export const getAllCategory = () => {
    return async dispatch => {
        console.log("category are loading...");
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORY_REQUEST
        });
        
        try {
            
            const res = await axios.get("/category/getcategory");
            // console.log(res.data);
            const { categoryList } = res.data;
            console.log(categoryList)
            if (res.status === 200) {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                    payload: {
                        categories: categoryList
                    }
                })
            }
            else {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORY_FAILURE
                })
            }

        } catch (error) {
            


        }
        
       

    }
}

