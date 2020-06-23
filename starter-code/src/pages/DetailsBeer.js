import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";

export default class DetailsBeer extends Component {
    constructor(props){
        super(props)
        this.state = {
          beers: []
        }
      }
    
    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers")
            .then(response => {
            this.setState({beers: response.data})
            })
    }

    render() {
        if(this.state.beers.length === 0 ) return <h1>Loading...</h1>;
        let beer = this.state.beers.find((beer)=> beer._id === this.props.match.params.beerId)

        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <div className="col-7">
                        <img className="beer-image" src={beer.image_url} alt="BEER"/>
                        <h3>{beer.name}</h3>
                        <h3>{beer.attenuation_level}</h3>
                        <h4>{beer.tagline}</h4>
                        <h6>{beer.first_brewed}</h6>
                        <p>{beer.description}</p>
                        <h6>{beer.contributed_by}</h6>
                    </div>  
                </div>
            </div>
        )
    }
}
