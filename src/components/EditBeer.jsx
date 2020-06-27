import React, { Component } from 'react';
import axios from 'axios';
import '../styles/form.scss'


class EditBeer extends Component {
    
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
          e.preventDefault()
          axios({
              method: "POST",
              url: (`https://ih-beers-api.herokuapp.com/beers/edit/${this.props.match.params.id}`),
              data: this.state.beer,
          })
          .then((response)=> {
              this.props.history.push(`/beercard/${response.data._id}`)
          })
          .catch((error)=> {
              console.log(error.response.data)
          })
      }

    componentDidMount() { 
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(response => {
            this.setState({beer: response.data})
        })
    }

    render() {
        return (
            <div className = "form">
                <form onSubmit={(e) => this.handleAddBeerSubmit(e)}>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "name" value = {this.state.beer.name}/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "tagline" value = {this.state.beer.tagline}/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "description" value = {this.state.beer.description}/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "first_brewed" value = {this.state.beer.first_brewed}/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "brewers_tips" value = {this.state.beer.brewers_tips}/>
                    <input onChange={(e) => this.handleChange(e)} type= "number" name = "attenuation_level" value = {this.state.beer.attenuation_level}/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "contributed_by" value = {this.state.beer.contributed_by}/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EditBeer;
