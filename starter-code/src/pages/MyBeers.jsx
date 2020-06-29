import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Default from '../layouts/Default';

class MyBeers extends Component {
    state = {
        beers: [],
        error: null
    }

    componentDidMount(){
        axios({
            url: "https://ih-beers-api.herokuapp.com/user/my-beers",
            withCredentials: true,
            method: "GET"
        })
        .then(response => {
            this.setState({beers: response.data});
        })
        .catch (error => {
            this.setState({error});
        })
    }

    render() {
        if (this.state.beers.length === 0) return (<h1>No beers here, go and create your dream one!</h1>)
        return(
            <Default>
                <div className="beers">
                    {
                        this.state.beers.map(beer =>
                            <div className="container">
                                <Link className="row" to={`/beers/detail/${beer._id}`}>
                                    <div className="col-2">
                                        <img className="img-fluid beer-image" src={beer.image_url} alt={beer.name}/>
                                    </div>
                                    <div className="col-10 align-self-center">
                                        <h2 className="text-body">{beer.name}</h2>
                                        <p className="text-black-50">{beer.tagline}</p>
                                        <p><small className="text-body"><strong>Created by: </strong>{beer.contributed_by}</small></p>
                                    </div>
                                </Link>
                                <hr/>
                            </div>
                        )
                    } 
                </div>
            </Default>
        )
    }
}

export default MyBeers;