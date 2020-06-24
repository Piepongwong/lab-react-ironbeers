import React, { Component } from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import Nav from './components/Nav'
import Home from  './components/Home'
import Beers from './components/Beers'
import BeerCard from './components/BeerCard';
import Random from './components/Random';
import NewBeer from './components/NewBeer'

class App extends Component {

  

  render() {
    return (
      <div className='App'>
        <Nav/>
        <Route exact path="/" component = {Home} />
        <Route exact path="/beers" component = {Beers} />
        <Route exact path="/beercard/:id" component = {BeerCard} />
        <Route exact path="/random" component = {Random} />
        <Route exact path="/newBeer" component = {NewBeer} />
      </div>
    );
  }
}

export default App;
