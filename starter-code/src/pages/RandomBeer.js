import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";

export default class RandomBeer extends Component {
    constructor(props){
        super(props)
        this.state = {
          beer: null
        }
      }
    
    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers/random")
            .then(response => {
            this.setState({beer: response.data})
            })
    }

    render() {
        if(this.state.beer === null ) return <h1>Loading...</h1>;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <div className="col-7">
                        <img className="beer-image" src={this.state.beer.image_url} alt="BEER"/>
                        <h3>{this.state.beer.name}</h3>
                        <h3>{this.state.beer.attenuation_level}</h3>
                        <h4>{this.state.beer.tagline}</h4>
                        <h6>{this.state.beer.first_brewed}</h6>
                        <p>{this.state.beer.description}</p>
                        <h6>{this.state.beer.contributed_by}</h6>
                    </div>  
                </div>
            </div>
        )
    }
}
