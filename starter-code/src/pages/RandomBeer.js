import React from 'react';
import axios from "axios";
import "./styling/BeerDetail.css";


class RandomBeer extends React.Component {
    state = {
        aBeer: {}
    }
    componentDidMount() {
        axios
            .get(`https://ih-beers-api.herokuapp.com/beers/random`)
            .then(response => {
                let beer = response.data
                this.setState({ aBeer: beer })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container beer-detail">
            <div className="beer-image">
                <img src={this.state.aBeer.image_url} alt="beer"></img>
            </div>
            <div className="beer-title">
                <h2>{this.state.aBeer.name}</h2>
                <h3>{this.state.aBeer.attenuation_level}</h3>
            </div>
            <div className="beer-subtitle">
                <h5>{this.state.aBeer.tagline}</h5>
                <p><b>{this.state.aBeer.first_brewed}</b></p>
            </div>
            <div className="description">
                <p>{this.state.aBeer.description}</p>
            </div>
            <div className="contributor">
                <p><b>{this.state.aBeer.contributed_by}</b></p>
            </div>
        </div>
        
        )
    }
}

export default RandomBeer;