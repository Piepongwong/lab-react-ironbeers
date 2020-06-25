import React, { Component } from 'react';
import axios from 'axios';
import DefaultLayout from "../layout/Default";

class NewBeer extends Component {
    constructor(props) {
        super(props);   
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    state={
        error:null
    }

    handleSubmit(e){
        e.preventDefault();
        var formData = new FormData(this.formRef.current);

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
            <DefaultLayout>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mr-auto justify-content-center">
                            <div className="card-header">
                                <h3 className="mb-0 text-center">Add New Beer</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} className="form" ref={this.formRef}>                    
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label" htmlFor="name">Name</label>
                                        <div className="col-lg-8">
                                            <input type="text" name="name" className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label" htmlFor="tagline">Tagline</label>
                                        <div className="col-lg-8">
                                            <input type="text" name="tagline" className="form-control" placeholder="Tagline"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label" htmlFor="description">Description</label>
                                        <div className="col-lg-8">
                                            <input type="text" name="description" className="form-control" placeholder="Description"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label" htmlFor="first_brewed">First Brewed</label>
                                        <div className="col-lg-8">
                                            <input type="date" name="first_brewed" className="form-control" placeholder="First Brewed"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label" htmlFor="brewers_tips">Brewer Tips</label>
                                        <div className="col-lg-8"><input type="text" name="brewers_tips" className="form-control" placeholder="Brewer's Tips"/></div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label" htmlFor="attenuation_level">Attentuation Level</label>
                                        <div className="col-lg-8"><input type="number" name="attenuation_level" className="form-control" placeholder="Attentuation Level"/></div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label" htmlFor="contributed_by">Contributed By</label>
                                        <div className="col-lg-8"><input type="text" name="contributed_by" className="form-control" placeholder="Contributed By"/></div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label form-control-label">Image</label>
                                        <div className="col-lg-8"><input type="file" name="picture"/></div>
                                    </div>
                                    <div className="row justify-content-center"><button type="button" className="btn btn-info btn-lg">Submit</button> </div>             
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default NewBeer;