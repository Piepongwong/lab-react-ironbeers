import React, { Component } from 'react';
import axios from 'axios';
import { getUser } from '../utils/auth';
import qs from 'qs';

class EditProfile extends Component {
    constructor() {
        debugger
        super();
        this.handleChange = this.handleChange.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    state = {
        user: getUser()
    }

    handleChange(e) {
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    editProfile(e) {
        e.preventDefault();
        axios({
            url: `https://ih-beers-api.herokuapp.com/user/profile/edit`,
            data: qs.stringify(this.state.user),
            withCredentials: true,
            method: "POST"
        })
        .then(() => {
            this.props.editProfile();
            this.props.history.push(`/user/profile`);
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div>
                <form className="container">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input className="form-control" type="text" onChange={this.handleChange} name="username" value={this.state.user.username} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label for="firstname">First name</label>
                        <input className="form-control" type="text" onChange={this.handleChange} name="firstname" value={this.state.user.firstname} placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <label for="lastname">Last name</label>
                        <input className="form-control" type="text" onChange={this.handleChange} name="lastname" value={this.state.user.lastname} placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input className="form-control" type="text" onChange={this.handleChange} name="email" value={this.state.user.email} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" onChange={this.handleChange} name="password" value={this.state.user.password} placeholder="Password" />
                    </div>

                    <button onClick={this.editProfile} type="submit">Submit</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}

export default EditProfile; 