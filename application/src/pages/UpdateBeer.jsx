import React, { Component } from 'react'
import axios from 'axios';

export default class UpdateBeer extends Component {
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

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const attenuation_level = this.state.attenuation_level;
        const brewers_tips = this.state.brewers_tips;
        const contributed_by = this.state.contributed_by;

        axios.post("https://ih-beers-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, attenuation_level, brewers_tips, contributed_by })
            .then((response) => {
                this.setState({ name: "", tagline: "", description: "", first_brewed: "", attenuation_level: "", brewers_tips: "", contributed_by: "" });
                this.props.history.push(`/beers/${response.data._id}`);
            })

            .catch(error => 
                console.log("Error", error)
            )
    }

    handleChange (event) {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <h1>New Beer</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e) } placeholder="Name"/>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e) } placeholder="Tagline"/>
                    <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e) } placeholder="Description"/>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e) } placeholder="First brewed year"/>
                    <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e) } placeholder="Attenuation level"/>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e) } placeholder="Brewers tips"/>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e) } placeholder="Contributed by"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}






// constructor(props) {
//     super(props);
//     this.setTagline = this.setTagline.bind(this);
//     this.setDescription = this.setDescription.bind(this);
//     this.setBrewersTips = this.setBrewersTips.bind(this);
// }

// state = {
//     image: "",
//     name: "",
//     calories: "",
//     quantity: 0
// }

// setTagline(e) {
//     this.setState({
//         tagline: e.target.value
//     })
// }

// setDescription(e) {
//     this.setState({
//         description: e.target.value
//     })
// }

// setBrewersTips(e) {
//     this.setState({
//         brewers_tips: e.target.value
//     })
// }

// render() {
//     return (
//         <div>

//             <form onSubmit={this.handleFormSubmit}>
//                 <input type="text" class="input"
//                 onChange={this.setTagline}
//                 value={this.state.tagline}
//                 placeholder="Tagline"
//                 name="tagline" />
//                 <input type="text" class="input"
//                 onChange={this.setDescription}
//                 value={this.state.description}
//                 placeholder="Description"
//                 name="description" />
//                 <input type="text" class="input"
//                 onChange={this.setBrewersTips}
//                 value={this.state.brewers_tips}
//                 placeholder="Brewers tips"
//                 name="brewers_tips" />
//                 <input class="button is-info" type="submit" value="Save" />
//             </form>
//         </div>
//     )
// }
// }
