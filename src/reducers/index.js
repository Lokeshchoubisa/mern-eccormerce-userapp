import { combineReducers } from "redux"
import categoryReducer from "./category.reducer"
import  productReducer  from "./product.reducer";
import  cartReducer  from "./cart.reducer";
import orderReducer from "./order.reducer";
import userReducer from "./user.reducer";

const rootReducer=combineReducers({
  
    category:categoryReducer,
    product:productReducer,
    cart:cartReducer,
    order:orderReducer,
    user:userReducer
   
});
export default rootReducer;

