import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {
    constructor(props) {
        debugger
        super(props);   
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    state={
        error:null
    }

    handleSubmit(e){
        debugger
        e.preventDefault();
        var formData = new FormData(this.formRef.current);
        console.log(formData);

        axios({
            url:"https://ih-beers-api.herokuapp.com/beers/new",
            data:formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            method:"POST"
        })
        .then((response=>{
            this.props.history.push(`/beer-detail/${response.data._id}`)
        }))
        .catch((error)=>{
            this.setState({
                error:error.response.data.message
            });
        })

    }
    
    render() {
        return (

            <div className="container">
                <h1>Add New Beer</h1>
                <form onSubmit={this.handleSubmit} ref={this.formRef}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" name="tagline" className="form-control" placeholder="Tagline"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control" placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input type="date" name="first_brewed" className="form-control" placeholder="First Brewed"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">Brewer Tips</label>
                        <input type="text" name="brewers_tips" className="form-control" placeholder="Brewer's Tips"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">Attentuation Level</label>
                        <input type="number" name="attenuation_level" className="form-control" placeholder="Attentuation Level"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">Contributed By</label>
                        <input type="text" name="contributed_by" className="form-control" placeholder="Contributed By"/>
                    </div>
                    <label className="custom-file-upload">
                        <input type="file" name="picture"/>
                        upload beer image
                    </label>
                    {/* <div className="custom-file-upload">
                        <input type="file" className="custom-file-input" name="picture"/>
                        <label className="custom-file-label" name="picture" htmlFor="picture">Choose file</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>              
                </form>
            </div>
        );
    }
}

export default NewBeer;