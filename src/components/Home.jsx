import React, { Component } from 'react';
import beersPicture from '../images/beers.png'
import newBeerPicture from '../images/new-beer.png'
import randomBeer from '../images/random-beer.png'
import {Link} from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <Link to = "/beers">
                        <img src ={beersPicture} alt = ""/>
                        <h1>All Beers</h1>
                    </Link>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit maiores eius incidunt beatae quod soluta. In quo quidem quasi, neque esse dolor odio ipsam, eum porro deleniti adipisci ducimus.</p>
                </div>
               <div>
                    <Link to = "/random">
                        <img src ={randomBeer} alt = ""/>
                        <h1>Random Beer</h1>
                   </Link>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit maiores eius incidunt beatae quod soluta. In quo quidem quasi, neque esse dolor odio ipsam, eum porro deleniti adipisci ducimus.</p>
               </div>
               <div>
                    <Link to = '/newBeer'>
                        <img src ={newBeerPicture} alt = ""/>
                        <h1>New Beer</h1>
                    </Link>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit maiores eius incidunt beatae quod soluta. In quo quidem quasi, neque esse dolor odio ipsam, eum porro deleniti adipisci ducimus.</p>
               </div>
               
               
            </div>
        );
    }
}

export default Home;
