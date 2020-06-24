import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from '../components/BeerCard';
import Default from '../layouts/Default';

class BeerDetail extends Component {
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

    deleteBeerHandler(){
        axios.get(`https://ih-beers-api.herokuapp.com/beers/delete/${this.props.match.params.id}`)
        .then(() => {
            this.props.history.push(`/beers`)
        })
        .catch(err => {
            this.setState({
                error: err.response.data.message
            })
        })
    }

    render() {
        if (this.state.beers.length === 0) return (<h1>Loading...</h1>)
        let beer = this.state.beers.find(beer => beer._id === this.props.match.params.id);
        return(
            <Default>
                <div className="beer-detail">
                    <BeerCard
                        {...beer}
                        id = {this.props.match.params.id}
                        clickToDelete = {() => this.deleteBeerHandler() }
                    />
                </div>
            </Default>
            
        )
    }
}

export default BeerDetail;