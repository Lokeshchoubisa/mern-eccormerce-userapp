import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { pictureUrl } from '../../urlConfig';
// import {Table} from "react-bootstrap"
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import "./style.css"
import { cancleOrder, fetchAllOrders } from '../../actions';
// import { translateAliases } from '../../../../back-end/src/models/user';


export default function OrderPage() {
    
    
    const order=useSelector(state=>state.order);
    const dispatch=useDispatch();

    const user = useSelector(state => state.user)
    useEffect(() => {
        dispatch(fetchAllOrders())
    }, [])

    const clickCancleOrder=(orderId)=>
    {
        const form={
            orderId:orderId
        }
        dispatch(cancleOrder(form));
    }
    
    return (
        <div>
            <Layout />
            <div className="card">
                    <div className="cardHeader">
                        <div>Orders</div>
                        <button>view all</button>
                    </div>
                    </div>   

          

                <Table style={{fontSize:12 }} responsive="sm">
                <thead>
                <div style={{margin:"0rem 0rem" }} className="d-flex justify-content-between">  
                        
                       

    </div>
                </thead>
                <tbody>
               
                        {order.orders ? order.orders.map((product,index)=>
                         {
                        return (
                        <div style={{margin:"0rem 0  3rem 0" }}  className="order-list d-flex justify-content-between">  
                        
                        <div  className="imageContainer">
                        <img src={pictureUrl + product.productId.productPicture[0].img}></img>
                        </div>
                        <div className="detailContainer">
                         
                            <h5>{product.productId.name}</h5>
                            {/* <h3>Product Price</h3> */}
                            <h6 className="price">Price</h6>
                            <h6 >{product.price}</h6>
                            <button onClick={()=>{clickCancleOrder(product._id)}} className="btn btn-danger">cancle order</button>
                            
                        </div>
                        <div className="address d-flex flex-column justify-content-center">
                            <h6>{product.deliveryAddress}</h6>
                        </div>
                        
                        <div className="status d-flex flex-column justify-content-center">
                        <h6>{product.status}</h6>
                        </div>

    </div>

                     )} ): <h4>You need to Sign in first</h4> }

                        


                </tbody>
            </Table>



             



        </div>
    )
}
