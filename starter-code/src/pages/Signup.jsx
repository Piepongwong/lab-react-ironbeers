import React, { Component } from "react";
import axios from "axios";
import qs from "qs"; 
import Default from '../layouts/Default';
import { signup } from "../utils/auth";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
    }

    state = {
        user: {},
        error: null
    }

    handleChange(e) {
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    signUpUser(e) {
        e.preventDefault();
        signup(this.state.user)
        .then(() => {
            this.props.history.push('/user/profile')
        })
        .catch(error => {
            this.setState({error})
        })
    }


    render() {
        return (
            <Default>
                <div className="signup">
                    <form className="container">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label for="firstname">First name</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="firstname" placeholder="First name" />
                        </div>
                        <div className="form-group">
                            <label for="lastname">Last name</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="lastname" placeholder="Last name" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input className="form-control" type="text" onChange={this.handleChange} name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input className="form-control" type="password" onChange={this.handleChange} name="password" placeholder="Password" />
                        </div>
                        
                        <button onClick={this.signUpUser} type="submit">Submit</button>
                    </form>
                </div>
            </Default>
        )
    }
}

export default Signup;