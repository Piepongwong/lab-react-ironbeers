import React from "react";
import { login } from "../utils/auth";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state = {
        user: {
            username: "",
            password: ""
        },
        error: null
    }
    handleChange(event) {
        let userCopy = {...this.state.user}
        userCopy[event.target.name] = event.target.value
        this.setState({
            user: userCopy
        })
    }
    handleSubmit() {
        login(this.state.user)
            .then(() => {
                this.setState({
                    error: null
                }, () => {
                    this.props.history.push("/user/profile")
                })
            })
            .catch((error) => {
                this.setState({ error: error.response && error.response.data })
            })
    }
    render() {
        return (
            <div>
                <h3>Log In</h3>
                <div className="form">
                    <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username" /> 
                    <input onChange={this.handleChange} value={this.state.password} placeholder="password" type="password" name="password" />
                    <button
                        className="login-button"
                        onClick={this.handleSubmit}>
                        Log In
                    </button>
                        {this.state.error &&
                            <p>{this.state.error.message}</p>
                        }
                </div>
            </div>
        )
    }
}