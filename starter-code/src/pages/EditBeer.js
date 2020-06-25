import React, { Component } from 'react';
import axios from "axios";
import "./Forms.css";


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
                let beer = beers.find((oneBeer)=> oneBeer._id === this.props.match.params.beerId);
                this.setState({beer});
            })
            .catch((error)=>{
                this.setState({
                    error
                });
            });
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
        axios.post(`https://ih-beers-api.herokuapp.com/beers/edit/${this.state.beer._id}`, this.state.beer)
            .then((response)=> {
                this.props.beerUpdate(response.data);
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
                <form onSubmit={this.postBeer} className="p-3">
                    <div className="form-group">
                        <label className="form-label" for="Name">Name</label>
                        <input type="text"  className="form-control form-box" name="name" onChange={this.handleChange} value={this.state.beer.name}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="Name">Tagline</label>
                        <input type="text"  className="form-control form-box" name="tagline" onChange={this.handleChange} value={this.state.beer.tagline}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="Name">Description</label>
                        <textarea class="form-control form-box" name="description" rows="3" onChange={this.handleChange} value={this.state.beer.description}></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="Name">First Brewed</label>
                        <input type="text"  className="form-control form-box" name="first_brewed" onChange={this.handleChange} value={this.state.beer.first_brewed}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="Name">Attenuation Level</label>
                        <input type="text"  className="form-control form-box" name="attenuation_level" onChange={this.handleChange} value={this.state.beer.attenuation_level}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="Name">Brewers Tips</label>
                        <input type="text"  className="form-control form-box" name="brewers_tips" onChange={this.handleChange} value={this.state.beer.brewers_tips}/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" for="Name">Contributed By</label>
                        <input type="text"  className="form-control form-box" name="contributed_by" onChange={this.handleChange} value={this.state.beer.contributed_by}/>
                    </div>

                    <button className="btn btn-info" type="submit">Edit Beer</button>
                </form>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
            </div>
        )
    }
}