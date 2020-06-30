import React, { Component } from 'react';
import DefaultLayout from '../layout/Default';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class BeerDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    componentDidMount() {
        this.getSingleBeer();
    }

    getSingleBeer() {
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${params.id}`)
            .then(response =>{
                const theBeer = response.data;
                this.setState(theBeer);
            })
            .catch(error => 
                this.setState({
                    error: error.response.data.message
                })
            )
    }

    deleteBeer(){
        // https://ih-beers-api.herokuapp.com/beers/delete/:id
    }

    render() {
        return (
            <DefaultLayout>
            <div>
                <h1>Beer detail page</h1>
                <img src={this.state.image_url} alt={this.state.name}/>
                <h3>{this.state.tagline}</h3>
                <p>{this.state.name}</p>
                <p>{this.state.first_brewed}</p>
                <p>{this.state.attenuation_level}</p>
                <p>{this.state.description}</p>
                <p>{this.state.contributed_by}</p>
                <Link to={`/update/${this.state._id}`}>Update beer</Link>
            </div>
            </DefaultLayout>
        )
    }
}
