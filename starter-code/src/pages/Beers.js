import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Beers.css";

export default class Beers extends Component {
    constructor(){
        super()
        this.searchBeer = this.searchBeer.bind(this);

        this.state = {
          beers: [],
          filteredBeers: []
        }
      }
    
    componentDidMount() {
        axios({
            url: "https://ih-beers-api.herokuapp.com/beers",
            method: "GET",
            withCredentials: true
        })
        .then(response => {
            this.setState({beers: response.data, filteredBeers: response.data})
        })
    }

    searchBeer(e){
        let searchTerm = e.target.value;
        if (searchTerm.length === 0){
            return this.setState({filteredBeers: this.state.beers})
        }
        axios({
            url:`https://ih-beers-api.herokuapp.com/beers/search?q=${searchTerm}`,
            method: "GET",
            withCredentials: true
        })
        .then(response => {
            this.setState({filteredBeers: response.data});
        });
      }
    

    render() {
        if(this.state.beers.length === 0 ) return <h1>Loading...</h1>;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 d-flex justify-content-center offset-lg-3">
                            <input
                                type="text"
                                className="form-control m-4 form-box"
                                placeholder="Search for a Beer"
                                onChange={this.searchBeer}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 d-flex justify-content-center offset-lg-3">
                            <div className="list-group list-scroll">
                                {
                                    this.state.filteredBeers.map((beer)=>
                                        <Link to={`/beers/${beer._id}`} className="link-group">
                                            <div className="d-flex justify-content-center">
                                                <div className="col-3">
                                                    <img className="beer-image img-fluid" src={beer.image_url} alt="BEER"/>
                                                </div>
                                                <div className="col-9 text-wrap list-text">
                                                    <h3 className="mb-2">{beer.name}</h3>
                                                    <h4>{beer.tagline}</h4>
                                                    <h6><span className="font-weight-bold">Created by: </span>{beer.contributed_by}</h6>
                                                </div>
                                            </div>

                            
                                            <hr/>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}
