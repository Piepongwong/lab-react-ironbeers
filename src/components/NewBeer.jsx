import React, { Component } from 'react';
import axios from 'axios';
import '../styles/form.scss'
import { getUser } from '../utils/auth';

class NewBeer extends Component {
    constructor(props){
        super(props)
        this.formRef = React.createRef();
        this.handleAddBeerSubmit = this.handleAddBeerSubmit.bind(this)
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
          console.log(this.state.beer);
          debugger
          var beerData= new FormData(this.formRef.current);
            e.preventDefault()
            axios({
                method: "POST",
                url: "https://ih-beers-api.herokuapp.com/beers/new",
                withCredentials: true,
                data: beerData,
                headers : {
                    'content-typ' : 'multipart/form-data'
                }
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
            <div className = "form">
                <form onSubmit={(e) => this.handleAddBeerSubmit(e)} ref = {this.formRef}>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "name" placeholder = "name"/>
                    <input onChange={(e) => this.handleChange(e)} type= "file" name = "picture" placeholder = "picture"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "tagline" placeholder = "tagline"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "description" placeholder = "description"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "first_brewed" placeholder = "first brewed"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "brewers_tips" placeholder = "brewers tips"/>
                    <input onChange={(e) => this.handleChange(e)} type= "number" name = "attenuation_level" placeholder = "attenuation level"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "contributed_by" placeholder = {getUser.username==null? `${getUser.username}` : "contributed by"}/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;
