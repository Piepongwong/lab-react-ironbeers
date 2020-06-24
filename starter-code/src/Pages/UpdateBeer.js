import React, { Component } from 'react';
import axios from 'axios';

class UpdateBeer extends Component {

    constructor(props) {
        debugger;
        super(props); 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
    }

    state={
        beer:this.props.beer,
        error:null
    }

    handleInputChange(event){
        let beerData = {...this.state.beer};
        let {name, value} = event.target;
        
        beerData[name] = value;
        
        this.setState({
            beer:beerData
        })

        console.log(this.state.beer);
    }

    updateHandler(e){
        debugger
        e.preventDefault();

        axios.post(`https://ih-beers-api.herokuapp.com/beers/edit/${this.state.beer._id}`, this.state.beer)
        .then((response=>{
            this.props.toggleUpdateFormVisibility();
            debugger
            this.props.updateHandler(this.state.beer._id)
            //this.props.history.push(`/beer-detail/${this.state.beer._id}`);
        }))
        .catch((error)=>{
            this.setState({
                error:error
            });
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Add New Beer</h1>
                <form onSubmit={this.updateHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Name" onChange={this.handleInputChange} value={this.state.beer.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" name="tagline" className="form-control" placeholder="Tagline" onChange={this.handleInputChange} value={this.state.beer.tagline}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInputChange} value={this.state.beer.description}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input type="date" name="first_brewed" className="form-control" placeholder="First Brewed" onChange={this.handleInputChange} value={this.state.beer.first_brewed}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">Brewer Tips</label>
                        <input type="text" name="brewers_tips" className="form-control" placeholder="Brewer's Tips" onChange={this.handleInputChange} value={this.state.beer.brewers_tips}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">Attentuation Level</label>
                        <input type="number" name="attenuation_level" className="form-control" placeholder="Attentuation Level" onChange={this.handleInputChange} value={this.state.beer.attenuation_level}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">Contributed By</label>
                        <input type="text" name="contributed_by" className="form-control" placeholder="Contributed By" onChange={this.handleInputChange} value={this.state.beer.contributed_by}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>              
                </form>
            </div>
        );
    }
}

export default UpdateBeer;