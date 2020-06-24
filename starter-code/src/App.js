import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 


import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
// import NewBeer from './pages/NewBeer'
import BeerDetail from './pages/BeerDetail'
import NewBeerImage from './pages/NewBeerImage'
import EditBeer from './pages/EditBeer'
import EditBeerImage from './pages/EditBeerImage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/random" component={RandomBeer} />
          <Route exact path="/beers/new" component={NewBeerImage} />
          <Route exact path="/beers/detail/:id" component={BeerDetail} />
          <Route exact path="/beers/edit/:id" component={EditBeer} />
          <Route exact path="/beers/edit-image/:id" component={EditBeerImage} />

        </Switch>

      </div>
    );
  }
}

export default App;
