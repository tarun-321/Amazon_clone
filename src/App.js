import React ,{useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () =>{
      unsubscribe();
    }
  }, []);
  console.log(user)
  return (
    <div className="app">
      <Router>
          <Switch>
            
            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout/>
            </Route>
            
            <Route path="/">
              {/* rendering header form header.js */}
              <Header/>
              <Home/>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
