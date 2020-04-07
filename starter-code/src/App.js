import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetail from "./pages/BeerDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Link to={`/`}>
            <img src="/home5.png" className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/beers" component={AllBeers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/beers/:id" component={BeerDetail}/>
          <Route path="/new-beer" component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
