import React, { Component } from 'react'
import axios from 'axios';
import './Beer.scss';
import { Link, Redirect } from 'react-router-dom';

class EditBeer extends Component {
  constructor(props) {
    super(props)
    this.editBeer = this.editBeer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    updateBeer: {},    
  }

  componentDidMount() {
    debugger
    axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.props.id}`)
    .then(response => {
        this.setState({
          updateBeer: response.data,
        })
    })
  }

  editBeer(event){
    debugger
    event.preventDefault();
    axios.post(`https://ih-beers-api.herokuapp.com/beers/edit/${this.props.id}`, this.state.updateBeer)
    .then((response)=>{
      debugger
      this.props.history.push(`/beers/${response.data._id}`); 
      // this.setState({
      //   beer: response.data
      // })
    })
    .catch((error)=>{
      console.log(error);
      debugger
      this.setState({
        error: error.response.data.message
      })
    })
  }

  handleChange(event){
    debugger
    let newBeer = {...this.state.updateBeer};
    newBeer[event.target.name] = event.target.value;
    this.setState({
      updateBeer: newBeer
    })
  }

  render() {
    debugger
    return (
      <form> 
        <label>Name</label>
        <input type="text" name="name" value={this.state.beerUpdate.name} onChange={this.handleChange} placeholder="The beer name.."/>
        <label>Tagline</label>
        <input type="text" name="tagline" value={this.state.beerUpdate.tagline} onChange={this.handleChange} placeholder="The tagline.."/>
        <label>Description</label>
        <input type="text" className="description" value={this.state.beerUpdate.description} name="description" onChange={this.handleChange} placeholder="Description.."/>
        <label>First brewed</label>
        <input type="text" name="first_brewed" value={this.state.beerUpdate.first_brewed} onChange={this.handleChange} placeholder="Date.. "/>
        <label>Attenuation level</label>
        <input type="text" name="attenuation_level" value={this.state.beerUpdate.attenuation_level} onChange={this.handleChange} placeholder="1 till and including 10.."/>
        <label>Brewers tips</label>
        <input type="text" name="brewers_tips" value={this.state.beerUpdate.brewers_tips} onChange={this.handleChange} placeholder="The tips.."/>
        <label>Contributed by</label>
        <input type="text" name="contributed_by" value={this.state.beerUpdate.contributed_by} onChange={this.handleChange} placeholder="Names brewers.."/>
        <button onClick={this.editBeer} type="submit">Edit beer!</button>
        <p>{this.state.error}</p>
      </form>
    )
  }
}

export default EditBeer
