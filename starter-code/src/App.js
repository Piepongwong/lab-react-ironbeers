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
import Signup from './pages/Signup'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import MyBeers from './pages/MyBeers'

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
          <Route exact path="/beers/my-beers" component={MyBeers} />
          <Route exact path="/beers/edit/:id" component={EditBeer} />
          <Route exact path="/beers/edit-image/:id" component={EditBeerImage} />
          <Route exact path="/user/sign-up" component={Signup} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/logout" component={Logout} />
          <Route path="/user/profile" component={Profile} />
          <Route path="/" component={PageNotFound} />
        </Switch>

      </div>
    );
  }
}

export default App;
