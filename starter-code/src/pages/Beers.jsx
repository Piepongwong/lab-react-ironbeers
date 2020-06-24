import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Default from '../layouts/Default';

class Beers extends Component {
    state = {
        beers: [],
        error: null
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

export default Beers;