import React, { Component } from 'react'
import axios from "axios";
import Navbar from '../compnents/Navbar';

export default class NewBeer extends Component {
    
    constructor(props){
        super(props)
        this.formRef = React.createRef();

        this.state = {
            beer:{},
            error:null
        }
    } 
    handleChange = (event) =>{
       let newState = {...this.state.beer};
       let { name, value } = event.target;
       newState[name] = value;
       this.setState({
           beer: newState
     })
    }
    handleSubmit = (event) => {
        debugger
        event.preventDefault();
        var newBeerData = new FormData(this.formRef.current);
        console.log(newBeerData+ "vijay");

        axios({
            url: 'https://ih-beers-api.herokuapp.com/beers/new',
            data:newBeerData,
            header:{
                'content-type': 'multipart/form-data'
            },
            withCredentials: true,
            method: "Post"
        })

        .then((response)=>{
           console.log(response.data+"varun");
            this.props.history.push(`/onebeer/${response.data._id}`)
        })
        .catch((err)=>{
           console.log(err.respose.data)
        })
    }
    render() {
        return (
            <div className = "form">
                            <Navbar/>
                <form onSubmit={(e) => this.handleSubmit(e)} ref = {this.formRef}>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "name" placeholder = "name"/>
                    <input onChange={(e) => this.handleChange(e)} type= "file" name = "picture" placeholder = "picture"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "tagline" placeholder = "tagline"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "description" placeholder = "description"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "first_brewed" placeholder = "first brewed"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "brewers_tips" placeholder = "brewers tips"/>
                    <input onChange={(e) => this.handleChange(e)} type= "number" name = "attenuation_level" placeholder = "attenuation level"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "contributed_by" placeholder = "contributed by"/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}
