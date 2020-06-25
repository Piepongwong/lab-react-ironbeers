import React, { Component } from 'react';
import axios from 'axios';
import DefaultLayout from "../layout/Default";

class NewBeer extends Component {
    constructor(props) {
        debugger
        super(props);   
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handleInputChange = this.handleInputChange.bind(this);  
    }

    state={
        error:null,
        beer:{}
    }

    handleInputChange(event){
        debugger;
        let beerData = {...this.state.beer};
        let {name, value} = event.target;
        
        beerData[name] = value;
        
        this.setState({
            beer:beerData
        })

        console.log(this.state.beer);
    }

    handleSubmit(e){
        debugger
        e.preventDefault();

        axios.post("https://ih-beers-api.herokuapp.com/beers/new", this.state.beer)
        .then((response=>{
            debugger
            this.props.history.push(`/beer-detail/${response.data._id}`)
        }))
        .catch((error)=>{
            debugger
            this.setState({
                error:error.response.data.message
            });
        })
    }
    
    render() {
        return (
            <DefaultLayout>
            <div className="container">
                <h1>Add New Beer</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Name" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" name="tagline" className="form-control" placeholder="Tagline" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input type="date" name="first_brewed" className="form-control" placeholder="First Brewed" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">Brewer Tips</label>
                        <input type="text" name="brewers_tips" className="form-control" placeholder="Brewer's Tips" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">Attentuation Level</label>
                        <input type="number" name="attenuation_level" className="form-control" placeholder="Attentuation Level" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">Contributed By</label>
                        <input type="text" name="contributed_by" className="form-control" placeholder="Contributed By" onChange={this.handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>              
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

export default NewBeer;