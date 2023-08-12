import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51HPyqUFp3vn3fwpB9adiaym2R0BKHANFk1RhkrIaL1HSzi664uHzAK0qbBNLsCopfwstCGh7xQ6UDYwxyZ6kM1ga00kRW8LE3W");

function App() {
  const [{}, dispatch] = useStateValue();
useEffect(() => {
  //will only run once when the app component loads
  auth.onAuthStateChanged(authUser => {
    console.log('USER is' , authUser);

    if(authUser) {
      //user is logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      // the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])

  return (

    //BEM naming convention
    <Router>
    
    <div className="app">
      <Switch>
      <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>


        <Route path="/"> {/*this is the default route for homepage and should always be at the bottom*/}
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
