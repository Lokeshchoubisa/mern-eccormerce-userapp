import { productConstants } from "../actions/constants"

const initState={
    products:[],
    productByPrice:{
        under5k:[],
        under10k:[],
        under15k:[],
        under20k:[],
        under30k:[]
    },
    randomProduct:[]
}

export default (state=initState,action)=>
{
       switch(action.type)
       {
           case productConstants.GET_PRODUCTS_BY_SLUG:
               state={
                   ...initState,
                   products:action.payload.products,
                   productByPrice:action.payload.productByPrice
               }
               break;
            case productConstants.GET_RANDOM_PRODUCT_SUCCESS:
                state={
                    ...state,
                    randomProduct:action.payload
                }
       }
       return state;
       
}