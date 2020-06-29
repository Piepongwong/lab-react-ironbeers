import React, { Component } from 'react';
import Default from '../layout/Default';
import {getUser} from '../utils/auth';
import { Link, Route } from 'react-router-dom'; 
import EditProfile from './EditProfile';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
    }

    user = getUser();

    state = {
        form: false
    }

    toggleForm(){
        this.setState({
            form: !this.state.form
        });
    }

    render() {
        return(
            <Default>
                <h1>Welcome to your profile, {this.user.username}</h1>
                <p><strong>First name:</strong>{this.user.firstname}</p>
                <p><strong>Last name:</strong>{this.user.lastname}</p>
                <p><strong>Email:</strong>{this.user.email}</p>
                <Link to={`/user/profile/edit`} onClick={this.toggleForm}>Edit profile</Link>
                {this.state.form && <Route path="/user/profile/edit" render={(props) => <EditProfile {...props} editProfile={this.toggleForm} />} />}
            </Default>
        )
    }
}
export default Profile;