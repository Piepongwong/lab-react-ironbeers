import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage';
import Beers from './Pages/Beers'
import BeerDetail from './compnents/BeerDetail'
import { Switch,Route } from 'react-router-dom';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import Logout from './Pages/Logout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component= {Home}/>
        <Route path = '/beers' component={Beers}/>
        <Route path = '/onebeer/:id' component = {BeerDetail}/>
        <Route path = '/randombeer' component = {RandomBeer}/>
        <Route path = '/newbeer' component = {NewBeer}/>
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/login' component = {Login}/>
        <Route path = '/logout' component = {Logout}/>
        <Route path = '/profile' component = {Logout}/>
      </Switch>
    </div>
  );
}

export default App;
