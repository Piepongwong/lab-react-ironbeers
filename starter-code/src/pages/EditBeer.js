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
        beer: null,
        error: null
    }

    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers")
            .then(response => {
                let beers = response.data;
                let beer = beers.find((oneBeer)=> oneBeer._id === this.props.match.params.beerId)
                this.setState({beer})
            })
            .catch((error)=>{
                this.setState({
                    error
                })
            })
    }

    handleChange(e){
        let beer = {...this.state.beer};
        beer[e.target.name] = e.target.value;
        this.setState({
            beer
        })
    }

    postBeer(e){
        e.preventDefault();
        axios.post(`https://ih-beers-api.herokuapp.com/beers/edit/${this.state.beer._id}`, this.state.beer)
            .then((response)=> {
                debugger
                this.props.history.push(`/beers/${response.data._id}`);
            })
            .catch((err) => {
                this.setState({
                    error: err.response.data.message
                });
            });
    }

    render() {
        if(this.state.beer === null ) return <h1>Loading...</h1>;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="new-beer">
                    <form onSubmit={this.postBeer}>
                        <input type="text" onChange={this.handleChange} name="name" placeholder="Beer Name" value={this.state.beer.name}/>
                        <input type="text" onChange={this.handleChange} name="tagline" placeholder="Tagline" value={this.state.beer.tagline}/>
                        <input type="text" onChange={this.handleChange} name="description" placeholder="Description" value={this.state.beer.description}/>
                        <input type="text" onChange={this.handleChange} name="first_brewed" placeholder="First Brewed" value={this.state.beer.first_brewed}/>
                        <input type="text" onChange={this.handleChange} name="attenuation_level" placeholder="Attenuation Level" value={this.state.beer.attenuation_level}/>
                        <input type="text" onChange={this.handleChange} name="brewers_tips" placeholder="Brewers Tips" value={this.state.beer.brewers_tips}/>
                        <input type="text" onChange={this.handleChange} name="contributed_by" placeholder="Contributed By" value={this.state.beer.contributed_by}/>
                        <input value={this.state.beer._id} type="hidden" name="_id" />
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
