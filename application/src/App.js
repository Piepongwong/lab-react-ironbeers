import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import NewBeerImg from './pages/NewBeerImg';
import BeerDetail from './pages/BeerDetail';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import LogOut from './pages/LogOut';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={AllBeers} />
          <Route path="/random" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/new-beer-img" component={NewBeerImg} />
          <Route path="/beers/:id" component={BeerDetail} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/logout" component={LogOut} />
        </Router>
      </div>
    );
  }
}

export default App;
