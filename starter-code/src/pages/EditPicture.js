import React, { Component } from 'react';
import axios from "axios";
import "./Forms.css";
import {getSingleBeer} from "../utils/beer";


export default class EditPicture extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formRef = React.createRef();
    }

    state = {
        beer: null,
        error: null
    }

    componentDidMount() {
        getSingleBeer(this.props.match.params.beerId)
        .then(response => {
            return this.setState({beer: response});
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(this.formRef.current);

        axios({
            url: `https://ih-beers-api.herokuapp.com/beers/edit/${this.state.beer._id}`,
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: "POST"
        })
        .then((response)=>{
            this.props.beerPictureUpdate(response.data);
            this.props.history.push(`/beers/${response.data._id}`);
        })
        .catch((err)=>{
            this.setState({
                error: err.response.data.message
            });
        });
    }


    render() {
        if(this.state.beer === null ) return <h1>Loading...</h1>;
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} ref={this.formRef} className="p-3">
                        <input type="hidden" name="name" value={this.state.beer.name}/>
                        <input type="hidden" name="tagline" value={this.state.beer.tagline}/>
                        <input type="hidden" name="description" value={this.state.beer.description}/>
                        <input type="hidden" name="first_brewed" value={this.state.beer.first_brewed}/>
                        <input type="hidden" name="attenuation_level" value={this.state.beer.attenuation_level}/>
                        <input type="hidden" name="brewers_tips" value={this.state.beer.brewers_tips}/>
                        <input type="hidden" name="contributed_by" value={this.state.beer.contributed_by}/>
                        <input value={this.state.beer._id} type="hidden" name="_id" />
                        <div className="form-group">
                            <div className="col-12 p-0">
                                <label className="custom-file-upload form-label">Upload Beer Picture </label>
                            </div>
                            <div className="col-12 p-0">
                                <input className=".form-control-file" type="file" name="picture"/>
                            </div>
                        </div>
                        <div className="col-12 p-0">
                            <button className="btn btn-info" type="submit">Edit Picture</button>
                        </div>

                    </form>
                    {
                        this.state.error && <p>{this.state.error}</p>
                    }
                </div>
            </div>
        )
    }
}