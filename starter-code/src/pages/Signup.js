import React from "react";
import {signup} from "../utils/auth"

export default class Signup extends React.Component {
    constructor(props){
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }
    state = {
        user: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        error: null
    }
    handleInput(event){
        let userCopy = {...this.state.user}
        userCopy[event.target.name] = event.target.value
        this.setState({
            user: userCopy
        })
    }
    handleSignup(){
        signup(this.state.user)
        .then(() => {
            this.setState({
                error: null
            }, () => {
                this.props.history.push("/user/profile")
            })
        })
        .catch((error) => {
            this.setState({error: error.response && error.response.data})
        })
    }
    render(){
        return (
            <div className="form">
                <div className="input-field">
                    <label>Username</label>
                    <div>
                        <input 
                        onChange={this.handleInput}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"
                        />
                    </div>
                </div>
                <div className="input-field">
                    <label>Firstname</label>
                    <div>
                        <input 
                        onChange={this.handleInput}
                        value={this.state.firstname}
                        name="firstname"
                        type="text"
                        placeholder="firstname"
                        />
                    </div>
                </div>
                <div className="input-field">
                    <label>Lastname</label>
                    <div>
                        <input 
                        onChange={this.handleInput}
                        value={this.state.lastname}
                        name="lastname"
                        type="text"
                        placeholder="lastname"
                        />
                    </div>
                </div>
                <div className="input-field">
                    <label>E-mail</label>
                    <div>
                        <input 
                        onChange={this.handleInput}
                        value={this.state.email}
                        name="email"
                        type="text"
                        placeholder="email"
                        />
                    </div>
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <div>
                        <input 
                        onChange={this.handleInput}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"
                        />
                    </div>
                </div>
                <button
                    className="signup-button"
                    onClick={this.handleSignup}>
                    Signup
                </button>
                {this.state.error &&
                        <p>{this.state.error.message}</p>
                    }
            </div>
        )
    }
}