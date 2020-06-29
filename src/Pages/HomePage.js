import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import  allbeer from '../images/beers.png';
import randomBeer from '../images/random-beer.png';
import newBeer from '../images/new-beer.png';
import Navbar from '../compnents/Navbar';


export default class HomePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
                <Link to = '/beers'>
                    <img src = { allbeer } alt=""/>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolod sit amet, consectetur adipiscing elit. Vivamus paretra egestas lectus, sit amet eleifend extincidunt.in </p>
                </Link>
                <Link to = '/randombeer'>
                    <img src = {randomBeer} alt =""/>
                    <h2>Random Beers</h2>
                    <p>Lorem ipsum dolod sit amet, consectetur adipiscing elit. Vivamus paretra egestas lectus, sit amet eleifend extincidunt.in </p>
                </Link>

                <Link to = '/new-beer'>
                    <img src = { newBeer } alt =""/>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolod sit amet, consectetur adipiscing elit. Vivamus paretra egestas lectus, sit amet eleifend extincidunt.in </p>
                </Link>

            </div>
        )
    }
}
