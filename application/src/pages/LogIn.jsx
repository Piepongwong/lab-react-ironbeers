import React, { Component } from 'react';
import {login} from '../utilities/auth';
import Form from '../layout/Form';

export default class LogIn extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.logInUser = this.logInUser.bind(this);
    }

    state = {
        user: {
            email: "",
            password: ""
        },
        error: null
    }

    handleChange(e) {
        let userCopy = {...this.state.user};
        userCopy[e.target.name] = e.target.value;
        this.setState({
            user: userCopy
        })
    }

    logInUser(e) {
        e.preventDefault();
        login(this.state.user)
        .then(() => {
            this.setState({
                error: null
            }, () => {
            this.props.history.push("/profile")
            })
        })
        .catch((error) => {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <input type="text" onChange={this.handleChange} name="email" placeholder="email" />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="password" />
                    <button 
                        className="is-primary button"
                        onClick={this.logInUser}>
                        Login
                    </button>
                </Form>
            </div>
        )
    }
}
