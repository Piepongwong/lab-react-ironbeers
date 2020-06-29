import React, { Component } from 'react'
import axios from 'axios';

class RandomBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
            beer:{}
        }
    }
    componentDidMount(){
        let url = `https://ih-beers-api.herokuapp.com/beers/random`
        axios.get(url).then((response)=>{
            console.log( response + 'varun')

            this.setState({beer: response.data})
        })
        .catch((error)=>{
            console.log(error + 'varun');
            this.setState({
              error: error.response.data.message
            })
          })
    }


    render() {
        return (
            <div>
                <img src = {this.state.beer.image_url} alt= {this.state.beer.name}/>
                <h1>{this.state.beer.name}</h1>
                <h6>{this.state.beer.tagline}</h6>
                <h6>{this.state.beer.first_brewed}</h6>
                <h6>{this.state.beer.attenuation_level}</h6>
                <h6>{this.state.beer.description}</h6>
                <h6>{this.state.beer.contributed_by}</h6>

            </div>
        )
    }
}

export default RandomBeer