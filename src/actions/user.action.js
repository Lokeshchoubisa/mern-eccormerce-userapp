import axios from "../helper/axios"
import { authConstants } from "./constants";
// import { productConstants } from "./constants";

export const LoginAction=(form)=>
{
    return async dispatch =>
    {   
        // const url="/products/"+slug;
        dispatch({
            type:authConstants.LOGIN_REQUEST
        })

        try {
            const res=await axios.post("/signin",form);
            console.log(res.data);
            if(res.status===200)
            {
               localStorage.setItem("token",res.data.token);
               localStorage.setItem("users",JSON.stringify(res.data.users));
               dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    users:res.data.users,
                    token:res.data.token
                }
            })
            //    window.location.reload();
            //    alert("signin success")
    
            }
            else
            {
                
            }
            
        } catch (error) {
            
        }
       
    }
}
export const SignupAction=(form)=>
{
    return async dispatch =>
    {   
        // const url="/products/"+slug;
        try {
            const res=await axios.post("/signup",form);
            console.log(res.data);
            if(res.status===201)
            {
            //    localStorage.setItem("token",res.data.token);
            
            alert("Signup Succes");
            // window.location.reload();
    
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
export const SignoutAction=()=>
{
    return async dispatch =>
    {   
        // const url="/products/"+slug;
        dispatch({
            type:authConstants.LOGOUT_FAILURE
        })
        
        try
        {
        
        const res=await axios.post("/signout");
        // console.log(res.data);
        if(res.status===200)
        {
        //    localStorage.setItem("token",res.data.token);
        // alert("Signup Succes");
        // dispatch({
        //     type:authConstants.LOGIN_REQUEST
        // })
        // window.location.reload();
        localStorage.clear();
        dispatch({
            type:authConstants.LOGOUT_SUCCESS
        })

        }
        else
        {
            alert("signout fail");
        }
    }

    catch(error)
    {

    }
   
        
    }
}


export const isUserLoggedIn = () => {
    console.log("is userloggin is called");
    return (dispatch) => {
        const token = localStorage.getItem("token");
        console.log(token);
        // const users=localStorage.getItem("token");
        if (token) {
            const users = JSON.parse(localStorage.getItem("users"));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { token, users }
            });
        }
        else {
            console.log("not token available");
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "failed to login" }
            });

        }
    }
}
