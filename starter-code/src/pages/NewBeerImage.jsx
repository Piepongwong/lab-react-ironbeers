import React, { Component } from 'react';
import axios from 'axios';
import Default from '../layouts/Default';

class NewBeer extends Component {
    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);
        this.postBeer = this.postBeer.bind(this);
        //https://reactjs.org/docs/refs-and-the-dom.html
        this.formRef = React.createRef();
    }

    postBeer(e) {
        e.preventDefault();
        //https://developer.mozilla.org/en-US/docs/Web/API/FormData
        var formData = new FormData(this.formRef.current);
        //https://github.com/axios/axios#axiosposturl-data-config
        const options = {
            url: 'https://ih-beers-api.herokuapp.com/beers/new',
            method: 'POST',
            withCredentials: true,
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
                    <form onSubmit={this.postBeer} className="container" ref={this.formRef}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tagline">Tagline</label>
                            <input className="form-control" type="text" name="tagline" placeholder="Tagline" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" type="text" name="description" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="first_brewed">First brewed</label>
                            <input className="form-control" type="date" name="first_brewed" placeholder="First brewed" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="brewers_tips">Brewers tips</label>
                            <input className="form-control" type="text" name="brewers_tips" placeholder="Brewers tips" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="attenuation_level">Attenuation level</label>
                            <input className="form-control" type="number" name="attenuation_level" placeholder="Attenuation level" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contributed_by">Contributed by</label>
                            <input className="form-control" type="text" name="contributed_by" placeholder="Contributed by" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="picture">Upload Beer Picture</label>
                            <input className="form-control" type="file" name="picture" />
                        </div>

                        <button  type="submit">Submit</button>
                    </form>
                </div>
            </Default>
        )
    }
}

export default NewBeer;