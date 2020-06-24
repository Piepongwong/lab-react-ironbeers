import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

export default class NewBeerImg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            attenuation_level: "",
            brewers_tips: "",
            contributed_by: "",
        }

        this.formRef = React.createRef();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        let formData = new FormData(this.formRef.current);

        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const attenuation_level = this.state.attenuation_level;
        const brewers_tips = this.state.brewers_tips;
        const contributed_by = this.state.contributed_by;

        axios({
            url: "https://ih-beers-api.herokuapp.com/beers/new",
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: "POST"
        })

        .then((response) => {
            this.setState({ name: "", tagline: "", description: "", first_brewed: "", attenuation_level: "", brewers_tips: "", contributed_by: "" });
            this.props.history.push(`/beers/${response.data._id}`);
        })

        .catch(error => 
            console.log(error, "error")
        )
    }

    handleChange (event) {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <Header />
                <h1>New Beer</h1>
                <form onSubmit={this.handleFormSubmit} ref={this.formRef}>
                    <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e) } placeholder="Name"/>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e) } placeholder="Tagline"/>
                    <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e) } placeholder="Description"/>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e) } placeholder="First brewed year"/>
                    <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e) } placeholder="Attenuation level"/>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e) } placeholder="Brewers tips"/>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e) } placeholder="Contributed by"/>
                    <label className="custom-file-upload">
                        <input type="file" name="image"/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
