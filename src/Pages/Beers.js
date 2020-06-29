import React, { Component } from 'react'
import axios from 'axios';
import OneBeer from '../compnents/oneBeer';

export default class Beers extends Component {

    constructor(){
        super();
        this.state={
            beers:[]
        }

    }

    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then((response)=>{
            this.setState({beers: response.data})
        })
    }



    render() {
        return (
            <div>
                {this.state.beers.map((beerData,index)=><OneBeer
                key= {index}
                name = {beerData.name}
                image = {beerData.image_url}
                tagline = {beerData.tagline}
                contributed_by = {beerData.contributed_by}
                id = {beerData._id} 
                />)
                }
            </div>
        )
    }
}
