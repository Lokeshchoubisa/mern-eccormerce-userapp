import React, { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap';
// import { propTypes } from 'react-bootstrap/esm/Image'
import { IoSearch, IoCartOutline, IoCaretDownCircleOutline, IoBagRemoveSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
// import Input from '../../../../admin-app/src/components/UI/input';
import { addToCart, deleteCartItems, fetchCartItems, placeOrder } from '../../actions';
import "./style.css"
import Input from "../UI/input"
import Modal from "../UI/modal"

export default function Productcard(props) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [deliveryAddress,setDeliveryAddress]=useState("");
    const [paymentMode,setPaymentMode]=useState("");
    const user = useSelector(state => state.user)
    const clickAddToCart = () => {
        
        if(!user.authenticate)
        {
            alert("You need to sign in first")
            return false
        }
        
        
        console.log(props);
        // const form=new FormData();
        const cartObj = {
            cartItems: {
                productId: props.product._id,
                price: props.product.price,
                quantity: 1
            }
        }
        // console.log(cartObj);
        // form.append("cartItems",cartObj);
        // console.log(form);
        dispatch(addToCart(cartObj));
    }

    const clickRemoveFromCart=()=>
    {
        dispatch(deleteCartItems({productId:props.product._id})).then(dispatch(fetchCartItems()));
    }

        
    const handleClose = () => {
        setShow(false);
     
        console.log(deliveryAddress);
        console.log(paymentMode);
        
        const form={
            "deliveryAddress":deliveryAddress,
            "productId":props.product._id,
            "price":props.product.price,
            "paymentMode":paymentMode
        }
        dispatch(placeOrder(form))
    }


    const clickOnBuyNow=()=>
    {
        
        if(!user.authenticate)
        {
            alert("You need to sign in first")
            return false
        }
        
        setShow(true);
        
        // console.log(form);

    }



    const renderAddDetailModal = () => {
        return (
            
            <Modal  size="xl" modalTitle={props.product.name} show={show} handleClose={handleClose} >
               
               <div  style={{marginBottom:"3rem"}} className="productContainer">
                <div className="productImgContainer">
                    <img src={"http://localhost:3000/public/" + props.productImages[0].img} alt="productImg"></img>
                </div>
                <div className="titleAndText">
                    <div style={{ margin: "5px" }}>{props.name}</div>
                    <div>
                        <span>4.5</span>
                        {/* <span>345</span> */}
                    </div>
                    <div>
                        {props.quantity ? props.quantity : null}
                    </div>

                    <div className="productPrice">{props.price}</div>
                   
                </div>
                </div>
                
                <label>Delivery Address</label>
                <Input
                    value={deliveryAddress}
                    placeholder={"Delivery Address"}
                    onChange={(e) => setDeliveryAddress(e.target.value)} />


                <label>payment Mode</label>
                <select
                    className="form-control"
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="COD">COD</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="EMI">EMI</option>
                    
                </select>

            

            </Modal>
            
        );
    }







    



    return (
        <>
            <div className="productContainer">
                <div className="productImgContainer">
                    <img src={"http://localhost:3000/public/" + props.productImages[0].img} alt="productImg"></img>
                </div>
                <div className="titleAndText">
                    <div style={{ margin: "5px" }}>{props.name}</div>
                    <div>
                        <span>4.5</span>
                        {/* <span>345</span> */}
                    </div>
                    <div>
                        {props.quantity ? props.quantity : null}
                    </div>

                    <div className="productPrice">{props.price}</div>
                    <div className="cartBuybuttons">
                        <div><button onClick={clickOnBuyNow} className="btn-primary border text-white mr-2 px-3 py-2">Buy now</button></div>
                        {props.cart ? <div> <button onClick={clickRemoveFromCart} className="btn-light border text-white ml-2 px-3 py-2 ml-2"> <IoBagRemoveSharp /> </button> </div>: 
                         <div> <button onClick={clickAddToCart} className="btn-light border text-white ml-2 px-3 py-2 ml-2"><IoCartOutline /></button></div>}

            </div>

            </div>
        </div>
        {renderAddDetailModal()}
    </>
    )
}


