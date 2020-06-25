import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";

export default class RandomBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
          beer: null
        };
      }
    
    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers/random")
            .then(response => {
            this.setState({beer: response.data});
            });
    }

    dateFormatting(date){
        let dateFormat = new Date(date);
        let month = dateFormat.getMonth() + 1;
        if (month < 10)  month = '0' + month;
        let year = dateFormat.getFullYear();
        return `${month}/${year}`;
    }

    render() {
        if(this.state.beer === null ) return <h1>Loading...</h1>;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 d-flex justify-content-center offset-lg-4">
                            <img className="beer-image img-fluid m-3" src={this.state.beer.image_url} alt="BEER"/>
                        </div>
                        <div className="col-md-12 col-lg-4 d-flex justify-content-between offset-lg-4">
                            <h3>{this.state.beer.name}</h3>
                            <h3 className="grey-level">{this.state.beer.attenuation_level}</h3>
                        </div>
                        <div className="col-md-12 col-lg-4 d-flex justify-content-between offset-lg-4 align-text-bottom">
                            <h4>{this.state.beer.tagline}</h4>
                            { this.state.beer.first_brewed && <h6 >{this.dateFormatting(this.state.beer.first_brewed)}</h6> }
                        </div>
                        <div className="col-md-12 col-lg-4 offset-lg-4">
                            <p>{this.state.beer.description}</p>
                        </div>
                        <div className="col-md-12 col-lg-4 offset-lg-4">
                            <h6 className="grey-level">{this.state.beer.contributed_by}</h6>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}
