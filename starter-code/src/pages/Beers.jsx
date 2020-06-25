import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Default from '../layouts/Default';
import SearchBeer from './SearchBeer';

class Beers extends Component {
    constructor(props){
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }
    state = {
        beers: [],
        filteredBeers: [],
        error: null
    }

    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            let beers = response.data;
            let filteredBeers = response.data;
            this.setState({beers, filteredBeers});
        })
        .catch (error => {
            this.setState({error});
        })
    }

    searchHandler(search) {
        const beerCopy = this.state.beers.filter(beer => beer.name.toLowerCase().includes(search.toLowerCase()));
        this.setState({
            filteredBeers: beerCopy
        })
    }

    // searchHandler(search) {
    //     debugger
    //     axios.get(`https://ih-beers-api.herokuapp.com/beers/search?q=${search}`)
    //     .then(response => {
    //         debugger
    //         console.log(response)npm
    //     })
    //     .catch (error => {
    //         this.setState({error});
    //     })
    // }

    render() {
        return(
            <Default>
                <SearchBeer searching={this.searchHandler}/>
                <div className="beers">
                    {
                        this.state.filteredBeers.map(beer =>
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