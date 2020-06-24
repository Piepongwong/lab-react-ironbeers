import React, { Component } from 'react'
import axios from 'axios';
import Beer from './../components/Beer'

class Beers extends Component {
    state = {
        beers: []         
    }

    componentDidMount() {
        axios.get('https://ih-beers-api.herokuapp.com/beers')
        .then(response => {
            this.setState({
                beers: response.data
            })
        })
    }

    render() {
        return (
            <div>
                { 
                this.state.beers.length === 0?
                <h3>Loading...</h3> :
                  this.state.beers.map((beer, index)=>(
                    <Beer key={`${index}-${beer.name}`} id={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} contributed_by={beer.contributed_by} />
                  ))
                }
            </div>
        )
    }
}

export default Beers
