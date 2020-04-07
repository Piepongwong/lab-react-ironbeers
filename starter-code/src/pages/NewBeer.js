import React from 'react';
import axios from "axios";
import qs from "qs";

class NewBeer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            attenuation_level: "",
            brewers_tips: "",
            contributed_by: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        debugger
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://ih-beers-api.herokuapp.com/beers/new",
            data: qs.stringify(this.state),
            headers:{
                "content-type": 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            this.props.history.push(`/beers/${response.data._id}`)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChange} name="name" />
                    <input type="text" placeholder="tagline" value={this.state.tagline} onChange={this.handleChange} name="tagline" />
                    <input type="text" placeholder="description" value={this.state.description} onChange={this.handleChange} name="description" />
                    <input type="text" placeholder="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} name="first_brewed" />
                    <input type="number" placeholder="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} name="attenuation_level" />
                    <input type="text" placeholder="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} name="brewers_tips" />
                    <input type="text" placeholder="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} name="contributed_by" />
                    <button type="submit">Add a new beer</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;