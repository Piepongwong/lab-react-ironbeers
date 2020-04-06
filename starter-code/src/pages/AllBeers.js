import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllBeers.css"

class AllBeers extends React.Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }
    componentDidMount() {
        axios
            .get("https://ih-beers-api.herokuapp.com/beers")
            .then((response) => {
                this.setState({ beers: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container">
                {this.state.beers.map((beer) => {
                    return (
                        <div className="one-beer">
                            <div className="beer-image">
                                <Link to={`/beers/${beer._id}`}>
                                    <img src={beer.image_url} alt="beer"></img>
                                </Link>
                            </div>
                            <div className="beer-description">
                                <Link to={`/beers/${beer._id}`}>
                                    <h2>{beer.name}</h2>
                                </Link>
                                <h5>{beer.tagline}</h5>
                                <p><b>Created by: </b>{beer.contributed_by}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AllBeers;