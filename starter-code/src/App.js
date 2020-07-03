import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetail from "./pages/BeerDetail";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/beers" component={AllBeers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/beers/:id" component={BeerDetail}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route exact path="/auth/signup" component={Signup}/>
          <Route exact path="/user/profile" component={Profile}/>
          <Route exact path="/user/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
