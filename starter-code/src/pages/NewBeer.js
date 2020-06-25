import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";
import "./Forms.css";

export default class NewBeer extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formRef = React.createRef();
    }

    state = {
        error: ""
    }

    handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(this.formRef.current);

        axios({
            url: "https://ih-beers-api.herokuapp.com/beers/new",
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            withCredentials: true, 
            method: "POST"
        })
        .then((response)=>{
            this.props.history.push(`/beers/${response.data._id}`);
        })
        .catch((err)=>{
            this.setState({
                error: err.response.data.message
            });
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 offset-lg-3 my-3">
                            <form onSubmit={this.handleSubmit} ref={this.formRef} className="p-3">
                                <div className="form-group">
                                    <label className="form-label" for="Name">Name</label>
                                    <input type="text"  className="form-control form-box" name="name"/>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="Name">Tagline</label>
                                    <input type="text"  className="form-control form-box" name="tagline"/>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="Name">Description</label>
                                    <textarea class="form-control form-box" name="description" rows="3"></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="Name">First Brewed</label>
                                    <input type="text"  className="form-control form-box" name="first_brewed" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="Name">Attenuation Level</label>
                                    <input type="text"  className="form-control form-box" name="attenuation_level" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="Name">Brewers Tips</label>
                                    <input type="text"  className="form-control form-box" name="brewers_tips" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="Name">Contributed By</label>
                                    <input type="text"  className="form-control form-box" name="contributed_by"/>
                                </div>

                                <div className="form-group">
                                    <div className="col-12 p-0">
                                        <label className="custom-file-upload form-label">Upload Beer Picture </label>
                                    </div>
                                    <div className="col-12 p-0">
                                        <input className=".form-control-file" type="file" name="picture"/>
                                    </div>
                                </div>
                                
                                <button className="btn btn-info" type="submit">Add New</button>
                            </form>
                            {
                                this.state.error && <p>{this.state.error}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
