import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
class Beers extends Component {
    constructor(props){
        super(props)
        this.state = {
            beers : []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.beers.map((oneBeer, index) =>{
                        return (
                            <Link to = {`/beercard/${oneBeer._id}`} key ={oneBeer._id}>
                                <div>
                                    <img src = {oneBeer.image_url} alt = ""/>
                                    <h1>{oneBeer.name}</h1>
                                    <p>{oneBeer.tagline}</p>
                                    <p><strong>Created by : </strong>{oneBeer.contributed_by}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default Beers;