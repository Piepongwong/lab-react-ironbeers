import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from '../components/BeerCard';
import Default from '../layouts/Default';

class RandomBeer extends Component {
    state = {
        beers: []    
    }

    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            let beers = response.data;
            this.setState({beers});
        })
        .catch (error => {
            this.setState({error});
        })
    }

    render() {
        if (this.state.beers.length === 0) return (<h1>Loading...</h1>)
        let randomBeerIndex = Math.floor(Math.random()*this.state.beers.length);
        let beer = this.state.beers[randomBeerIndex];
        return(
            <Default>
                <div className="beer-random">
                    <BeerCard {...beer} />
                </div>
            </Default>
            
        )
    }
}

export default RandomBeer;