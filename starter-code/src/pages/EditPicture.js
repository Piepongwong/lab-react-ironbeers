import React, { Component } from 'react';
import axios from "axios";

export default class NewBeer extends Component {
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
        axios.get("https://ih-beers-api.herokuapp.com/beers")
            .then(response => {
                let beers = response.data;
                let beer = beers.find((oneBeer)=> oneBeer._id === this.props.match.params.beerId);
                this.setState({beer});
            })
            .catch((error)=>{
                this.setState({
                    error
                });
            });
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
                <div className="new-beer">
                    <form onSubmit={this.handleSubmit} ref={this.formRef}>
                        <input type="hidden" name="name" value={this.state.beer.name}/>
                        <input type="hidden" name="tagline" value={this.state.beer.tagline}/>
                        <input type="hidden" name="description" value={this.state.beer.description}/>
                        <input type="hidden" name="first_brewed" value={this.state.beer.first_brewed}/>
                        <input type="hidden" name="attenuation_level" value={this.state.beer.attenuation_level}/>
                        <input type="hidden" name="brewers_tips" value={this.state.beer.brewers_tips}/>
                        <input type="hidden" name="contributed_by" value={this.state.beer.contributed_by}/>
                        <input value={this.state.beer._id} type="hidden" name="_id" />
                        <label className="custom-file-upload">
                            <input type="file" name="picture"/>Upload Beer Picture
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                    {
                        this.state.error && <p>{this.state.error}</p>
                    }
                </div>
            </div>
        )
    }
}