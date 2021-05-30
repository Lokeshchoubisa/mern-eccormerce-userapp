import React, { useEffect, useState } from 'react'
import "./style.css"
import {FormControl,Button,Navbar,Nav,Form,NavDropdown, Container} from "react-bootstrap";
// import {IoSearch} from "react-icons-io5"
import { IoSearch,IoCartOutline} from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchCartItems, LoginAction, SignoutAction, SignupAction } from '../../actions';
// import Input from '../../../../admin-app/src/components/UI/input';
// import { fetchCartItems } from '../../actions/cart.action';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Input from "../UI/input"
import Modal from "../UI/modal"



export default function Header() {

  const dispatch = useDispatch();
  useEffect(() => {
  }, [])
  const user = useSelector(state => state.user);
  
  const [signinShow, setSigninShow] = useState(false);
  const [show, setShow] = useState(false);
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [firstName,setFirstName ]=useState("");
  const [lastName,setLastName ]=useState("");
  const cart = useSelector(state => state.cart)
  const clickSignout=()=>
  {
    dispatch(SignoutAction())
  }
  const login=()=>
  {
    setSigninShow(true)

  }

  const handleCloseLogin = () => {
    setSigninShow(false);
    const form={
      "email":email,
      "password":password
    }
    
    dispatch(LoginAction(form))
}
  const handleCloseSignup = () => {
    setShow(false);
    const form={
      "email":email,
      "password":password,
      "firstName":firstName,
      "lastName":lastName
    }
    
    dispatch(SignupAction(form))
}


  const renderLoginModal=()=>
  {
    return (

      <Modal  size="sm" modalTitle={"Sign in"} show={signinShow} handleClose={handleCloseLogin} >
               
               
                <Input
                    value={email}
                    placeholder={"Email"}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <Input
                    value={password}
                    placeholder={"Password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

            </Modal>

    );
  }
  const renderSignupModal=()=>
  {
    return (

      <Modal  size="sm" modalTitle={"Sign up"} show={show} handleClose={handleCloseSignup} >
               
               
               
                <Input
                    value={firstName}
                    placeholder={"firstName"}
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
                <Input
                    value={lastName}
                    placeholder={"Last Name"}
                    onChange={(e)=>setLastName(e.target.value)}
                    />
                   <Input
                    value={email}
                    placeholder={"Email"}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <Input
                    value={password}
                    placeholder={"Password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

            </Modal>

    );
  }

  const renderCartItems =()=>
  {
   


  }


    return (
     <div>
    <Navbar className="header d-flex flex-nowrap justify-content-center"  expand="lg">
  <Navbar.Brand  href="/">
    <span className="icon text-white display-5">Lokesh</span>
  </Navbar.Brand>
  <Form className="searchForm" inline  >
  <div class="inputBox">
      <FormControl  className="" type="text" placeholder="Search For product brands and more" className="mr-sm-2" />
      {/* <IoSearch className="searchIcon" /> */}
      </div>
      {/* <IoSearch /> */}
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
    {user.authenticate ? <Button  onClick={()=>clickSignout()} className="signout btn btn-md btn-light px-4 mx-3" > Signout </Button>
    :<div><Button  onClick={login} className="signin btn btn-sm btn-light px-4 mx-3" > Sign in </Button>
    <Button  onClick={()=>setShow(true)} className="signup btn btn-sm btn-light px-4 mx-3" > Sign Up </Button>
    
    </div>}
        
    <div>
      
    <NavDropdown title={<span className="text-white my-auto">More</span>} id="basic-nav-dropdown">
        <NavDropdown.Item  href="/user/order">My orders</NavDropdown.Item>
        {user.authenticate ? <NavDropdown.Item  onClick={()=>clickSignout()} >SignOut </NavDropdown.Item> :<>
        <NavDropdown.Item  onClick={login} >Signin </NavDropdown.Item>
        <NavDropdown.Item  onClick={()=>setShow(true)} >Signup </NavDropdown.Item>
        </>}
        
        
      </NavDropdown>
  
  </div>
  {/* <IoCartOutline /> */}
  <div className="cart d-flex">
  <a href="/user/cart"  className=""><IoCartOutline className="text-white"/></a>
  <p>{cart.cartItems.length}</p>
  </div>
  {/* <h5>Hello lokesh</h5> */}
</Navbar>
{renderLoginModal()}
{renderSignupModal()}
</div>
        
    )
}
