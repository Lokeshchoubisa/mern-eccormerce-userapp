import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../../actions';
import Layout from '../../components/Layout'
import SliderImage from '../../components/sliderImage';
import "./style.css"
import { IoSearch,IoCartOutline} from "react-icons/io5";
import Productcard from '../../components/productCard';

export default function ProductListPage(props) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    useEffect(() => {
        const { match } = props;
        dispatch(getProductBySlug(match.params.slug));
    }, []);

    return (
        
            <Layout>
                <SliderImage />

                {
                   
                    Object.keys(product.productByPrice).map((key, index) => {
                        return (
                            <>
                        <div className="card">
                            <div className="cardHeader">
                                <div>{props.match.params.slug} mobile under {key.substring(5,)}</div>
                                
                            </div>
                            </div>
                            <div className="productlist-listpage">
                            {
                                product.productByPrice[key].map(product => 
                                    <Productcard  product={product} name={product.name} price={product.price} productImages={product.productPicture}/>
                                    
                                )
                            }
                            </div>
                            </>
                        
                       
                    
                
                     ); 
                })
                
                    }
            </Layout>
    )
}
                
