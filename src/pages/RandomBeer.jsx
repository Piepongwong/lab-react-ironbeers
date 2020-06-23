import React, { Component } from 'react'
import axios from 'axios';
import './../components/Beer.scss'

class RandomBeer extends Component {
  state = {
    beers: []         
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api.herokuapp.com/beers/random`)
    .then(response => {
        this.setState({
            beers: response.data
        })
    })
  }

  render() {
    if(this.state.beers.length === 0){
      return <h2>Loading...</h2>
    } else{
      return(
        <div className="Beer">

            <div className="image-container">
              <img src={`${this.state.beers.image_url}`} alt={`${this.state.beers.name}`} srcSet={`${this.state.beers.image_url}`}/>
            </div>
            <div className="beer-content">
              <h3>{this.state.beers.name}</h3>
              <h4>{this.state.beers.tagline}</h4>
              <p><strong>First brewed: </strong> {this.state.beers.first_brewed}</p>
              <p><strong>Attention level: </strong> {this.state.beers.attenuation_level}</p>
              <p><strong>Description: </strong> {this.state.beers.description}</p>
              <p><strong>Created by: </strong> {this.state.beers.contributed_by}</p>
            </div>
        </div>
      )
    }
  }
}

export default RandomBeer
