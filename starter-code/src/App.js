import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import DetailsBeer from "./pages/DetailsBeer";






class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Home}/>

        <Route exact path="/beers" component={Beers}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer}/>
        <Route path="/beers/:beerId" component={DetailsBeer}/>




      </div>
    );
  }
}

export default App;
