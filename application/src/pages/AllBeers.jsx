import React, { Component } from 'react'
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
    constructor(props){
        super(props);
        this.state = {
            allBeers: [],
            error: null
        }
    }
   
    getAllBeers() {
      axios.get(`https://ih-beers-api.herokuapp.com/beers`)
        .then(response => {
            this.setState({
                allBeers: response.data
            })
        })
    }
   
    componentDidMount() {
      this.getAllBeers();
    }

    render() {
        return (
            <div>
                <Header />
                <h1>All beers</h1>
                {
                    this.state.allBeers.map(beer => {
                        return (
                        <div key={beer._id}>
                            <Link to={`/beers/${beer._id}`}>
                                <img src={beer.image_url} alt={beer.name}/>
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                            </Link>
                        </div>
                        )})
                }
            </div>
        )
    }
}
