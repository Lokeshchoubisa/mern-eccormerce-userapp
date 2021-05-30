
import './App.css';
import HomePage from './containers/HomePage';
import CartPage from './containers/CartPage';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import ProductListPage from './containers/ProductListPage';
import OrderPage from './containers/orderPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllOrders, fetchCartItems, isUserLoggedIn } from './actions';
import BuyNowPage from './containers/BuyNowPage';
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
  
    
    dispatch(isUserLoggedIn())
    dispatch(fetchCartItems())
    
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user/cart" component={CartPage} />
          <Route path="/user/order" component={OrderPage} />
          <Route path="/product/buynow" name="lokesh" component={BuyNowPage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
