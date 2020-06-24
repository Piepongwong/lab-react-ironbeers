import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";

export default class NewBeer extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.postBeer = this.postBeer.bind(this);
    }


    deleteBeer(e){
        e.preventDefault();
        axios.get(`https://ih-beers-api.herokuapp.com/beers/delete/:id${this.state.beer._id}`, this.state.beer)
            .then((response)=> {
                debugger
                this.props.history.push(`/beers`);
            })
            .catch((err) => {
                this.setState({
                    error: err.response.data.message
                });
            });
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
