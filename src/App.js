import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import BeerDetails from './pages/BeerDetails'
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar/>
				<Route exact path='/'  component={Home}/>
				<Route exact path='/beers' component={Beers}/>
        <Route path='/random-beer' component={RandomBeer}/>
				<Route path='/new-beer' component={NewBeer}/>
        <Route path='/beers/:id' component={BeerDetails}/>
			</div>
		);
	}
}

export default App;
