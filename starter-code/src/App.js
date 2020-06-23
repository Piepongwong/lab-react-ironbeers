import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 


import Home from './components/beers/Home'
import Beers from './components/beers/Beers'
import RandomBeer from './components/beers/RandomBeer'
import NewBeer from './components/beers/NewBeer'
import BeerDetail from './components/beers/BeerDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/random" component={RandomBeer} />
          <Route exact path="/beers/new" component={NewBeer} />
          <Route exact path="/beers/detail/:id" component={BeerDetail} />
        </Switch>

      </div>
    );
  }
}

export default App;
