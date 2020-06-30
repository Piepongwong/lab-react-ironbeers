import React, { Component } from 'react';
import {signup} from '../utilities/auth';
import Form from '../layout/Form';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.signUpUser = this.signUpUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        user: {},
        error: null
    }

    handleChange(e) {
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({
            user
        })
    }

    signUpUser(e) {
        e.preventDefault();
        signup(this.state.user)
        .then(() => {
            this.props.history.push("/profile")
        })
    }

    render() {

        return (
            <Form>
                <form>
                    <input type="text" onChange={this.handleChange} name="username" placeholder="username" />
                    <input type="text" onChange={this.handleChange} name="firstname" placeholder="firstname" />
                    <input type="text" onChange={this.handleChange} name="lastname" placeholder="lastname" />
                    <input type="text" onChange={this.handleChange} name="email" placeholder="email" />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="password" />
                    <button 
                        className="is-primary button"
                        onClick={this.signUpUser}>
                        Signup
                    </button>
                </form>
                {this.state.error && 
                    <p className="has-text-danger">{this.state.error.message || "error"}</p>
                }
            </Form>
        )
    }
}