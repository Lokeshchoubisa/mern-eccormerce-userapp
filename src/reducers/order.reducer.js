import { orderConstant } from "../actions/constants"

const initState={
    orders:[]
}



export default (state=initState,action)=>
{
    switch(action.type)
    {
        case orderConstant.GET_ORDER_DATA_SUCCESS:
            state={
                orders:action.payload
            }
            break;
        case orderConstant.ADD_ORDER_DATA_SUCCESS:
            state={
                orders:action.payload
            }
            break;
        case orderConstant.DELETE_ORDER_DATA_SUCCESS:
            state={
                orders:action.payload
            }
            break;
            
    }
    return state;
}