import React, { Component } from 'react';
import axios from 'axios';
import Default from '../layouts/Default';

class EditBeer extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.editBeer = this.editBeer.bind(this);
    }
    state = {
        beer: {},
        error: null
    }

    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            let beers = response.data;
            let beer = beers.find((oneBeer)=> oneBeer._id === this.props.match.params.id);
            this.setState({beer});
        })
        .catch (error => {
            this.setState({error});
        })
    }

    handleChange(e) {
        let beer = {...this.state.beer};
        beer[e.target.name] = e.target.value;
        this.setState({beer});
    }

    editBeer(e) {
        e.preventDefault();
        axios.post(`https://ih-beers-api.herokuapp.com/beers/edit/${this.props.match.params.id}`, this.state.beer)
        .then(response => {
            this.props.history.push(`/beers/detail/${response.data._id}`)
        })
        .catch(err => {
            this.setState({
                error: err.response.data.message
            })
        })
    }

    render() {
        if (this.state.beer.length === 0) return (<h1>Loading...</h1>)
        return(
            <Default>
                <div className="new-beer">
                    <form className="container">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="name" value={this.state.beer.name} placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="tagline">Tagline</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="tagline" value={this.state.beer.tagline} placeholder="Tagline" />
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <textarea className="form-control" type="text" onChange={this.handleChange} name="description" value={this.state.beer.description} placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label for="first_brewed">First brewed</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="first_brewed" value={this.state.beer.first_brewed} placeholder="First brewed" />
                        </div>
                        <div className="form-group">
                            <label for="brewers_tips">Brewers tips</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="brewers_tips" value={this.state.beer.brewers_tips} placeholder="Brewers tips" />
                        </div>
                        <div className="form-group">
                            <label for="attenuation_level">Attenuation level</label>
                            <input className="form-control" type="number" onChange={this.handleChange} name="attenuation_level" value={this.state.beer.attenuation_level} placeholder="Attenuation level" />
                        </div>
                        <div className="form-group">
                            <label for="contributed_by">Contributed by</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="contributed_by" value={this.state.beer.contributed_by} placeholder="Contributed by" />
                        </div>

                        <button onClick={this.editBeer} type="submit">Submit</button>
                    </form>
                    {this.state.error && <p>{this.state.error}</p>}
                </div>
            </Default>
        )
    }
}

export default EditBeer;