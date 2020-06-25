import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import DetailsBeer from "./pages/DetailsBeer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={Beers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route path="/beers/:beerId" component={DetailsBeer}/>
          <Route path="/user/signup" component={Signup}/>
          <Route path="/user/login" component={Login}/>
          <Route path="/user/logout" component={Logout}/>
          <Route path="/user/profile" component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
