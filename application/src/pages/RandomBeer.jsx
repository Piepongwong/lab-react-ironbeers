import React, { Component } from 'react'
import Header from '../components/Header';
import axios from 'axios';

export default class RandomBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.getRandomBeer();
    }

    getRandomBeer() {
        axios.get("https://ih-beers-api.herokuapp.com/beers/random")
        .then(response => {
            this.setState(response.data);
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <h1>Random beer</h1>
                <img src={this.state.image_url} alt={this.state.name}/>
                <h3>{this.state.tagline}</h3>
                <p>{this.state.name}</p>
                <p>{this.state.first_brewed}</p>
                <p>{this.state.attenuation_level}</p>
                <p>{this.state.description}</p>
                <p>{this.state.contributed_by}</p>
            </div>
        )
    }
}
