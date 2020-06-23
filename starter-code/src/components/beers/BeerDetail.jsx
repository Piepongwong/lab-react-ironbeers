import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import BeerCard from './partial/BeerCard';


class BeerDetail extends Component {
    state = {
        beers: []    
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
        console.log(new Date('July 20, 69 00:20:18'))
        if (this.state.beers.length === 0) return (<h1>Loading...</h1>)
        let beer = this.state.beers.find(beer => beer._id === this.props.match.params.id);
        return(
            <div className="beer-detail">
                <Navbar />
                <BeerCard {...beer} />
    
            </div>
        )
    }
}

export default BeerDetail;