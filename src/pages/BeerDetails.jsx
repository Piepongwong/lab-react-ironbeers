import React, { Component } from 'react';
import axios from 'axios';
import './../components/Beer.scss';
import { Link, Redirect } from 'react-router-dom';

class BeerDetails extends Component {
  constructor(props){
    super(props);
    this.deleteBeer = this.deleteBeer.bind(this);
    this.toggleBeerForm = this.toggleBeerForm.bind(this);
    this.editBeer = this.editBeer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  state = {
    beer: {},
    updateBeer: {},
    error: null,
    form: false      
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.id}`)
    .then(response => {
        this.setState({
            beer: response.data,
            updateBeer: response.data,
        })
    })
  }

  deleteBeer(){
    axios.get(`https://ih-beers-api.herokuapp.com/beers/delete/${this.props.match.params.id}`)
    .then(()=>{
      this.props.history.push('/beers');
    })
    .catch((error)=>{
      console.log(error);
      this.setState({
        error: error.response.data.message
      })
    })
  }

  editBeer(event){
    event.preventDefault();
    axios.post(`https://ih-beers-api.herokuapp.com/beers/edit/${this.props.match.params.id}`, this.state.updateBeer)
    .then((response)=>{
      this.setState({
        beer: response.data
      })
    })

    .catch((error)=>{
      console.log(error);
      this.setState({
        error: error.response.data.message
      })
    })
  }

  toggleBeerForm(){
    this.setState({
      form: !this.state.form
    })
  }

  handleChange(event){
    let newBeer = {...this.state.updateBeer};
    newBeer[event.target.name] = event.target.value;
    this.setState({
      updateBeer: newBeer
    })
  }

  render() {
    if(this.state.beer.length === 0){
      return <h2>Loading...</h2>
    } else{
      return(
        <>
          <div className="Beer">
            <div className="image-container">
              <img src={`${this.state.beer.image_url}`} alt={`${this.state.beer.name}`} srcSet={`${this.state.beer.image_url}`}/>
            </div>
            <div className="beer-content">
              <h3>{this.state.beer.name}</h3>
              <h4>{this.state.beer.tagline}</h4>
              <p><strong>First brewed: </strong> {this.state.beer.first_brewed}</p>
              <p><strong>Attenuation level: </strong> {this.state.beer.attenuation_level}</p>
              <p><strong>Description: </strong> {this.state.beer.description}</p>
              <p><strong>Created by: </strong> {this.state.beer.contributed_by}</p>
              <button onClick={this.deleteBeer}>Delete this beer</button>
              <button onClick={this.toggleBeerForm}>Edit this beer</button>
              <p>{this.state.error}</p>
            </div>
          </div>
          <div className="edit-form">
            {
              this.state.form === true ?
              <form> 
                <label>Name</label>
                <input type="text" name="name" value={this.state.updateBeer.name} onChange={this.handleChange} placeholder="The beer name.."/>
                <label>Tagline</label>
                <input type="text" name="tagline" value={this.state.updateBeer.tagline} onChange={this.handleChange} placeholder="The tagline.."/>
                <label>Description</label>
                <input type="text" className="description" value={this.state.updateBeer.description} name="description" onChange={this.handleChange} placeholder="Description.."/>
                <label>First brewed</label>
                <input type="text" name="first_brewed" value={this.state.updateBeer.first_brewed} onChange={this.handleChange} placeholder="Date.. "/>
                <label>Attenuation level</label>
                <input type="text" name="attenuation_level" value={this.state.updateBeer.attenuation_level} onChange={this.handleChange} placeholder="1 till and including 10.."/>
                <label>Brewers tips</label>
                <input type="text" name="brewers_tips" value={this.state.updateBeer.brewers_tips} onChange={this.handleChange} placeholder="The tips.."/>
                <label>Contributed by</label>
                <input type="text" name="contributed_by" value={this.state.updateBeer.contributed_by} onChange={this.handleChange} placeholder="Names brewers.."/>
                <button onClick={this.editBeer} type="submit">Edit beer!</button>
                <p>{this.state.error}</p>
              </form>:
              <p></p>
            }
          </div>
        </>
      )
    }
  }
}

export default BeerDetails
