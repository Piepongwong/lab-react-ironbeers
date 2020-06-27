import React, { Component } from 'react';
import axios from 'axios';
import '../styles/beercard.scss'
import {Link, Route} from "react-router-dom";
class Random extends Component {
    constructor(props){
        super(props)
        this.state = {
            beer : []
        }
    }

      componentDidMount() { 
        axios.get(`https://ih-beers-api.herokuapp.com/beers/random`)
        .then(response => {
            this.setState({beer: response.data})
        })
    }

    render() {
        return (
            <div className="card">
            <img src = {this.state.beer.image_url} alt = ""/>
            <div className="right">
                <Link style={{ textDecoration: 'none' }} to = {`/editbeer/${this.state.beer._id}`}><h6>Edit this beer</h6></Link>
                <h6 onClick={() => this.deleteBeer()}>Delete this beer</h6>
                <h1>{this.state.beer.name}</h1> 
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.description}</p>
                <p><strong>Created by : </strong>{this.state.beer.contributed_by}</p>
            </div>
            
        </div>
        );
    }
}

export default Random;