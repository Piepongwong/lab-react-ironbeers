import React from 'react';
import axios from "axios";
import "./styling/NewBeer.css"

class NewBeer extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        error: ""
    }
    handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData(this.formRef.current);
        axios({
            method: "POST",
            url: "http://ih-beers-api.herokuapp.com/beers/new",
            data: formData,
            headers: {
                "content-type": 'multipart/form-data'
            }
        })
            .then(response => {
                this.props.history.push(`/beers/${response.data._id}`)
            })
            .catch((error) => {
                console.log(error)
                this.setState({ error: error.response.data.message })
            })
    }
    render() {
        return (
            <div className="create-beer">
                <h2>Create a new beer</h2>
                <form className="form-beer" onSubmit={this.handleSubmit} ref={this.formRef}>
                    <div className="form-input">
                        <label>Name of the beer</label>
                        <input type="text" placeholder="name" name="name" />
                    </div>
                    <div className="form-input">
                        <label>Tagline of the beer</label>
                        <input type="text" placeholder="tagline" name="tagline" />
                    </div>
                    <div className="form-input">
                        <label>Description of the beer</label>
                        <input type="text" placeholder="description" name="description" />
                    </div>
                    <div className="form-input">
                        <label>When was the beer brewed for the first time?</label>
                        <input type="text" placeholder="first_brewed" name="first_brewed" />
                    </div>
                    <div className="form-input">
                        <label>The attenuation level of the beer</label>
                        <input type="number" placeholder="attenuation_level" name="attenuation_level" />
                    </div>
                    <div className="form-input">
                        <label>Brewers tips for pairing </label>
                        <input type="text" placeholder="brewers_tips" name="brewers_tips" />
                    </div>
                    <div className="form-input">
                        <label>Contributor</label>
                        <input type="text" placeholder="contributed_by" name="contributed_by" />
                    </div>
                    <div className="form-input">
                        <label className="custom-file-upload">Upload beer picture</label>
                        <input type="file" name="picture" />
                    </div>
                    <div className="form-input">
                        <button type="submit">Add a new beer</button>
                    </div>
                </form>
                <div>
                    {this.state.error ?
                        <p>{this.state.error}</p> :
                        ""
                    }
                </div>
            </div>
        )
    }
}

export default NewBeer;