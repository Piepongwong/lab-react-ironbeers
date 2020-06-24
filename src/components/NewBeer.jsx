import React, { Component } from 'react';
import axios from 'axios';
import '../styles/newBeer.scss'

class NewBeer extends Component {
    constructor(props){
        super(props)
        this.state = {
            beer: {},
            error : null
        }
    }
    handleChange = (event) =>{
        let newState = {...this.state.beer}
        let { name, value } = event.target;
        newState[name] = value;
        this.setState({
            beer: newState
      })
    }

      handleAddBeerSubmit=(e)=>{
          console.log();
          
          debugger
            e.preventDefault()
            axios({
                method: "POST",
                url: "https://ih-beers-api.herokuapp.com/beers/new",
                data: this.state.beer,
            })
            .then((response)=> {
                this.props.history.push(`/beercard/${response.data._id}`)
            })
            .catch((error)=> {
                console.log(error.response.data)
            })
        }

    render() {
        return (
            <div className = "form-div">
                <form onSubmit={(e) => this.handleAddBeerSubmit(e)}>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "name" placeholder = "name"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "tagline" placeholder = "tagline"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "description" placeholder = "description"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "first_brewed" placeholder = "first_brewed"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "brewers_tips" placeholder = "brewers_tips"/>
                    <input onChange={(e) => this.handleChange(e)} type= "number" name = "attenuation_level" placeholder = "attenuation_level"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "contributed_by" placeholder = "contributed_by"/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;
