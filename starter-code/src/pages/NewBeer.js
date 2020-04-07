import React from 'react';
import axios from "axios";

class NewBeer extends React.Component {
    constructor(props){
        super(props);
        this.formRef = React.createRef(); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        error: ""
    }
    handleSubmit(e){
        e.preventDefault();
        var formData = new FormData(this.formRef.current); 
        axios({
            method: "POST",
            url: "http://ih-beers-api.herokuapp.com/beers/new",
            data: formData,
            headers:{
                "content-type": 'multipart/form-data'
            }
        })
        .then(response => {
            this.props.history.push(`/beers/${response.data._id}`)
        })
        .catch((error) => {
            console.log(error)
            this.setState({error: error.response.data.message})
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} ref={this.formRef}>
                    <input type="text" placeholder="name" name="name" />
                    <input type="text" placeholder="tagline" name="tagline" />
                    <input type="text" placeholder="description" name="description" />
                    <input type="text" placeholder="first_brewed" name="first_brewed" />
                    <input type="number" placeholder="attenuation_level" name="attenuation_level" />
                    <input type="text" placeholder="brewers_tips" name="brewers_tips" />
                    <input type="text" placeholder="contributed_by" name="contributed_by" />
                    <label className="custom-file-upload">
                            <input type="file" name="picture"/>
                            Upload beer picture
                        </label>
                    <button type="submit">Add a new beer</button>
                </form>
                {this.state.error ? 
                        <p>{this.state.error}</p>:
                        ""
                    }
            </div>
        )
    }
}

export default NewBeer;