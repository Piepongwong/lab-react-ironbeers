import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";
import {Link} from "react-router-dom";


export default class Beers extends Component {
    constructor(){
        super()
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
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 d-flex justify-content-center offset-lg-2">
                                <div className="list-group list-scroll">
                                    {
                                        this.state.beers.map((beer)=>
                                            <Link to={`/beers/${beer._id}`}>
                                                <div className="col">
                                                    <img className="beer-image" src={beer.image_url} alt="BEER"/>
                                                    <h3>{beer.name}</h3>
                                                    <h4>{beer.tagline}</h4>
                                                    <h6>{beer.contributed_by}</h6>
                                                    <hr/>
                                                </div>  
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
