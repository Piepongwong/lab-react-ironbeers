import React, { Component } from 'react';
import axios from 'axios';

class UpdateBeer extends Component {

    constructor(props) {
        debugger;
        super(props); 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.formRef = React.createRef();
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
        debugger
        console.log(this.state.beer);
    }

    updateHandler(e){
        
        debugger
        e.preventDefault();
        var formData = new FormData(this.formRef.current);

        axios({
            url:`https://ih-beers-api.herokuapp.com/beers/edit/${this.state.beer._id}`,
            data:formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            method:"POST"
        })
        .then((response=>{
            debugger
            this.props.toggleUpdateFormVisibility();
            this.props.updateHandler(response.data);
        }))
        .catch((error)=>{
            this.setState({
                error:error
            });
        })
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 py-2">
                <div className="card mr-auto justify-content-center">
                <div className="card-header"><h3 className="mb-0 text-center">Add New Beer</h3></div> 
                <div className="card-body">
                    <form onSubmit={this.updateHandler} className="form" ref={this.formRef}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control" onChange={this.handleInputChange} placeholder="Name" value={this.state.beer.name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tagline">Tagline</label>
                            <input type="text" name="tagline" className="form-control" onChange={this.handleInputChange} placeholder="Tagline" value={this.state.beer.tagline}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" className="form-control" onChange={this.handleInputChange} placeholder="Description" value={this.state.beer.description}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="first_brewed">First Brewed</label>
                            <input type="date" name="first_brewed" className="form-control" onChange={this.handleInputChange} placeholder="First Brewed" value={parseDateTimeToYYYYMMDD(this.state.beer.first_brewed)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brewers_tips">Brewer Tips</label>
                            <input type="text" name="brewers_tips" className="form-control" onChange={this.handleInputChange} placeholder="Brewer's Tips" value={this.state.beer.brewers_tips}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="attenuation_level">Attentuation Level</label>
                            <input type="number" name="attenuation_level" className="form-control" onChange={this.handleInputChange} placeholder="Attentuation Level" value={this.state.beer.attenuation_level}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contributed_by">Contributed By</label>
                            <input type="text" name="contributed_by" className="form-control" onChange={this.handleInputChange} placeholder="Contributed By" value={this.state.beer.contributed_by}/>
                        </div>
                        <div className="form-group">
                            <label className="custom-file-upload">Upload Image</label>
                            <input type="file" name="picture"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>              
                    </form>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default UpdateBeer;

function parseDateTimeToYYYYMMDD(dateTimeString){
    debugger
    var inputDate = new Date(dateTimeString)
    let date = inputDate.getDate();
    let year = inputDate.getFullYear();
    let month = inputDate.getMonth()+1;
    month = month<9 ? `0${month}`:month;
    date = date<9 ? `0${date}`:date;
    console.log(`${year}-${month}-${date}`);

    return `${year}-${month}-${date}`;
}