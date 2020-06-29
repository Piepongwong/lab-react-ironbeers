import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './Navbar';

export default class BeerDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            beer:{},
            update:{},
            error:null
        }
    }

    componentDidMount(){
        let beer = this.props.match.params.id;
        let url = `https://ih-beers-api.herokuapp.com/beers/${beer}`
        axios.get(url).then((response)=>{
            console.log(beer + 'varun')

            this.setState({
                beer: response.data,
                update:response.data
            })
        })
        .catch((error)=>{
            console.log(error + 'varun');
            this.setState({
              error: error.response.data.message
            })
          })
    }

    beerEdit=(e)=> {
        e.preventDefault();
        axios.post(`https://ih-beers-api.herokuapp.com/beers/edit/${this.props.match.params.id}`, this.state.update)
        .then((response)=>{
            this.setState({
                beer:response.data
            })
        })
        .catch((error)=>{
            this.setState({
                error: error.response.data.message
            })
        })
    }

    deleteBeer=(e)=>{
        axios.get(`https://ih-beers-api.herokuapp.com/beers/delete/${this.props.match.params.id}`)
        .then(()=>{
          this.props.history.push('/onebeer');
        })
        .catch((error)=>{
          console.log(error);
          this.setState({
            error: error.response.data.message
          })
        })
      }

    handleChange = (event) => { 
        let beer = {...this.setState.beer};  
        let { name,value } = event.target;
        beer[name]=value;
        this.setState({
             update:beer
        });
    }

    
    
    render() {
        return (
            <div>
                        <NavBar />

                <img src = {this.state.beer.image_url} alt= {this.state.beer.name}/>
                <h1>{this.state.beer.name}</h1>
                <h6>{this.state.beer.tagline}</h6>
                <h6>{this.state.beer.first_brewed}</h6>
                <h6>{this.state.beer.attenuation_level}</h6>
                <h6>{this.state.beer.description}</h6>
                <h6>{this.state.beer.contributed_by}</h6>
                <button onClick={this.deleteBeer}>Delete the beer</button>

                <div>
                    <h1>Edit your form below</h1>
                   
                   
                    <form>
                    
                    <input type = "text" placeholder = "BeerName" onChange={(e) => this.handleChange(e)}  value = {this.state.update.name} name = "name"/>
                    <input type="text" placeholder = "tagline"  onChange={(e) => this.handleChange(e)} value = {this.state.update.tagline} name = "tagline"/>
                    <input type="text" placeholder = "description"  onChange={(e) => this.handleChange(e)} value = {this.state.update.description} name = "description"/>
                    <input type="text" placeholder = "first_brewed"  onChange={(e) => this.handleChange(e)} value = {this.state.update.first_brewed} name = "first_brewed"/>
                    <input type="number" placeholder = "attenuation_level" onChange={(e) => this.handleChange(e)} value = {this.state.update.attenuation_level} name = "attenuation_level"/>
                    <input type="text" placeholder = "brewers_tips"  onChange={(e) => this.handleChange(e)} value = {this.state.update.brewers_tips} name = "brewers_tips"/>
                    <input type="text" placeholder = "contributed_by"  onChange={(e) => this.handleChange(e)} value = {this.state.update.contributed_by} name = "contributed_by"/>
                <button type = "submit" onClick={(e) => this.beerEdit(e)}>editbeer</button>
                    </form>
                </div>
            </div>
            
        )
    }
}
