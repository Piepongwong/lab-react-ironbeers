import React, { Component } from 'react';
import axios from 'axios';
import Default from '../layouts/Default';

class NewBeer extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.postBeer = this.postBeer.bind(this);
    }
    
    state = {
        beer: {},
        error: null
    }

    handleChange(e) {
        let beer = {...this.state.beer};
        beer[e.target.name] = e.target.value;
        this.setState({beer});
    }

    postBeer(e) {
        e.preventDefault();
        axios({
            url: "https://ih-beers-api.herokuapp.com/beers/new",
            withCredentials: true,
            data: this.state.beer,
            method: "POST"
        })
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
        return(
            <Default>
                <div className="new-beer">
                    <form className="container">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="tagline">Tagline</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="tagline" placeholder="Tagline" />
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <textarea className="form-control" type="text" onChange={this.handleChange} name="description" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label for="first_brewed">First brewed</label>
                            <input className="form-control" type="date" onChange={this.handleChange} name="first_brewed" placeholder="First brewed" />
                        </div>
                        <div className="form-group">
                            <label for="brewers_tips">Brewers tips</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="brewers_tips" placeholder="Brewers tips" />
                        </div>
                        <div className="form-group">
                            <label for="attenuation_level">Attenuation level</label>
                            <input className="form-control" type="number" onChange={this.handleChange} name="attenuation_level" placeholder="Attenuation level" />
                        </div>
                        <div className="form-group">
                            <label for="contributed_by">Contributed by</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="contributed_by" placeholder="Contributed by" />
                        </div>

                        <button onClick={this.postBeer} type="submit">Submit</button>
                    </form>
                </div>
            </Default>
        )
    }
}

export default NewBeer;