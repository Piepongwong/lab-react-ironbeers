import React, { Component } from 'react';
import './styles/App.scss';
import {Route} from "react-router-dom";
import Nav from './components/Nav'
import Home from  './components/Home'
import Beers from './components/Beers'
import BeerCard from './components/BeerCard';
import Random from './components/Random';
import NewBeer from './components/NewBeer'
import EditBeer from './components/EditBeer'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import MyBeers from './pages/MyBeers'
import Logout from './pages/Logout';
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
        <Route exact path="/editbeer/:id" component = {EditBeer} />
        <Route exact path="/auth/signup" component = {Signup} />
        <Route exact path="/auth/login" component = {Login} />
        <Route exact path="/landing" component = {Landing} />
        <Route exact path="/user/myBeers" component = {MyBeers} />
        <Route exact path="/auth/logout" component = {Logout} />
      </div>
    );
  }
}

export default App;
