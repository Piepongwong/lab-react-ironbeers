import React, { Component } from 'react';
import axios from 'axios';
import Default from '../layouts/Default';

class EditBeerImage extends Component {
    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);
        this.editBeerImage = this.editBeerImage.bind(this);
        //https://reactjs.org/docs/refs-and-the-dom.html
        this.formRef = React.createRef();
    }

    state = {
        beer: {},
        error: null
    }

    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            let beers = response.data;
            let beer = beers.find((oneBeer)=> oneBeer._id === this.props.match.params.id);
            this.setState({beer});
        })
        .catch (error => {
            this.setState({error});
        })
    }

    editBeerImage(e) {
        e.preventDefault();
        //https://developer.mozilla.org/en-US/docs/Web/API/FormData
        var formData = new FormData(this.formRef.current);
        //https://github.com/axios/axios#axiosposturl-data-config
        const options = {
            url: `https://ih-beers-api.herokuapp.com/beers/edit/${this.props.match.params.id}`,
            method: 'POST',
            headers: { 'content-type': 'multipart/form-data' },
            data: formData
        };
        axios(options)
        .then(response => {
            this.props.history.push(`/beers/detail/${response.data._id}`)
        })
        .catch(err => {
            this.setState({
                error: err.response.data.message
            })
        })
    }

    render() {
        return(
            <Default>
                <div className="new-beer">
                    <form onSubmit={this.editBeerImage} className="container" ref={this.formRef}>
                        <div className="form-group">
                            <label htmlFor="picture">Edit Beer Picture</label>
                            <input className="form-control" type="file" name="picture" />
                        </div>
                        <input type="hidden" name="name" value={this.state.beer.name} />
                        <input type="hidden" name="tagline" value={this.state.beer.tagline} />
                        <input type="hidden" name="description" value={this.state.beer.description} />
                        <input type="hidden" name="first_brewed" value={this.state.beer.first_brewed} />
                        <input type="hidden" name="brewers_tips" value={this.state.beer.brewers_tips} />
                        <input type="hidden" name="attenuation_level" value={this.state.beer.attenuation_level} />
                        <input type="hidden" name="contributed_by" value={this.state.beer.contributed_by} />

                        <button  type="submit">Submit</button>
                    </form>
                </div>
            </Default>
        )
    }
}

export default EditBeerImage;