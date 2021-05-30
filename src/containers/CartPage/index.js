import React, { useEffect } from 'react'
// import Header from '../../components/Header'
import Layout from '../../components/Layout'
import RandomProduct from '../../components/RandomProduct'
import SliderImage from '../../components/sliderImage'
// import MenuHeader from '../../components/MenuHeader'
import "./style.css"
import { IoSearch,IoCartOutline ,IoBagRemoveSharp} from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../../actions';
import Productcard from '../../components/productCard'
// import product from '../../../../back-end/src/models/product'

export default function CartPage() {

    const cart=useSelector(state=>state.cart);
  const dispatch = useDispatch();
    const user = useSelector(state => state.user)

  
  
  
  
 
    
    

    return (
        <div>
            <Layout />

            {/* <SliderImage /> */}
            {/* <RandomProduct/> */}
            
            {/* <p>{cart}</p> */}
            
            <div className="card">
                    <div className="cardHeader">
                        <div>Cart Products </div>
                        <button>view all</button>
                    </div>
                    </div>
            
            <div className="d-flex flex-wrap justify-content-start">

            {user.authenticate >0 ? 
            
            cart.cartItems.map((product,index)=>
            {
                return (
                    
                    <Productcard cart quantity={product.quantity}  name={product.name} price={product.price} productImages={product.productPicture} product={product}/>

                );
            })



            : <h4>You need to signin first</h4>}

            </div>
         
           

        </div>
    )
}
