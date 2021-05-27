import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomProduct } from '../../actions';
import "./style.css"
import { IoSearch,IoCartOutline} from "react-icons/io5";
import Productcard from '../productCard';
export default function RandomProduct() {
    const product = useSelector(state => state.product)
    const user = useSelector(state => state.user)
    
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getRandomProduct());

    }, [])

    return (
        <div>
                  <div className="card">
                    <div className="cardHeader">
                   Top products {user.user.firstName!==""?("for " + user.user.firstName):""}
                        
                    </div>
                    </div>
                
               
                <div className="product-list d-flex flex-wrap ">
                {

                    //  randomProduct 
                   product.randomProduct ? product.randomProduct.map((product, index) => {
                        return (
                            <>
                           
                            <Productcard  name={product.name} price={product.price} productImages={product.productPicture} product={product} />
                           
                            </>
                        
                        )
                    }) : ""

                }
                </div>
                
                

        </div>
)}
