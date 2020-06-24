import React, { Component } from 'react'
import './NewBeer.scss';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class NewBeer extends Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.postTheBeer = this.postTheBeer.bind(this);
      this.formRef = React.createRef();
    }

    state = {
      beer: {},
      error: null
    }

    postTheBeer(event){
      debugger
      event.preventDefault();
      const theNewBeer = this.state.beer

      var beerData = new FormData(this.formRef.current);

      axios({
        url: 'https://ih-beers-api.herokuapp.com/beers/new',
        data: beerData,
        headers: {
          'content-typ': 'multipart/form-data'
        },
        method: "post"
      })
      .then((response)=>{
        debugger
        this.setState({
          beer: {}
        })
        this.props.history.push(`/beers/${response.data._id}`); 
      })
      .catch((error)=>{
        debugger
        console.log(error);
        this.setState({
          error: error.response.data.message
        })
      })
    }

    handleChange(event){
      let beer = {...this.state.beer};
      beer[event.target.name] = event.target.value;
      this.setState({
        beer
      })
    }

    render() {
      return (
        <div className="NewBeer">
          <form ref={this.formRef}> 
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} placeholder="The beer name.."/>
            <label>Tagline</label>
            <input type="text" name="tagline" onChange={this.handleChange} placeholder="The tagline.."/>
            <label>Description</label>
            <input type="text" className="description" name="description" onChange={this.handleChange} placeholder="Description.."/>
            <label>First brewed</label>
            <input type="text" name="first_brewed" onChange={this.handleChange} placeholder="Date.. "/>
            <label>Attenuation level</label>
            <input type="text" name="attenuation_level" onChange={this.handleChange} placeholder="1 till and including 10.."/>
            <label>Brewers tips</label>
            <input type="text" name="brewers_tips" onChange={this.handleChange} placeholder="The tips.."/>
            <label>Contributed by</label>
            <input type="text" name="contributed_by" onChange={this.handleChange} placeholder="Names brewers.."/>
            <label>Beer Image</label>
            <input type="file" name="picture" onChange={this.handleChange}/> 
            <button onClick={this.postTheBeer} type="submit">Add new beer!</button>
            <p>{this.state.error}</p>
          </form>
        </div>
      )
    }
}

export default NewBeer
