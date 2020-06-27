import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";



export default class NewBeer extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.postBeer = this.postBeer.bind(this);
    }

    state = {
        beer: {},
        error: null
    }

    handleChange(e){
        let beer = {...this.state.beer};
        beer[e.target.name] = e.target.value;
        this.setState({
            beer
        });
    }

    postBeer(e){
        e.preventDefault();
        axios.post("https://ih-beers-api.herokuapp.com/beers/new", this.state.beer)
            .then((response)=> {
                this.props.history.push(`/beers/${response.data._id}`);
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
                <div>
                    <Header />
                </div>
                <div className="new-beer">
                    <form onSubmit={this.postBeer}>
                        <input type="text" onChange={this.handleChange} name="name" placeholder="Beer Name"/>
                        <input type="text" onChange={this.handleChange} name="tagline" placeholder="Tagline"/>
                        <input type="text" onChange={this.handleChange} name="description" placeholder="Description"/>
                        <input type="text" onChange={this.handleChange} name="first_brewed" placeholder="First Brewed"/>
                        <input type="text" onChange={this.handleChange} name="attenuation_level" placeholder="Attenuation Level"/>
                        <input type="text" onChange={this.handleChange} name="brewers_tips" placeholder="Brewers Tips"/>
                        <input type="text" onChange={this.handleChange} name="contributed_by" placeholder="Contributed By"/>
                        <button type="submit">Submit</button>
                    </form>
                    {
                        this.state.error && <p>{this.state.error}</p>
                    }
                </div>
            </div>
        )
    }
}
