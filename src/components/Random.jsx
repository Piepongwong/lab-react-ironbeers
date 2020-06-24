import React, { Component } from 'react';
import axios from 'axios';
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
            <div>
                <img src = {this.state.beer.image_url} alt = ""/>
                <h1>{this.state.beer.name}</h1> 
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.description}</p>
                <p><strong>Created by : </strong>{this.state.beer.contributed_by}</p>
            </div>
        );
    }
}

export default Random;