import React, { Component } from 'react';
import { signup } from '../utils/auth'
import Navbar from '../compnents/Navbar';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    state = {
        user: {},
        error:null
    }

    handleInputChange(e){
        let userCopy = {...this.state.user};
        userCopy[e.target.name] = e.target.value;
        this.setState({
            user:userCopy
        })
    }

    handleSignupClick(e){
        e.preventDefault();
        signup(this.state.user)
        .then(()=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/profile")
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
            <div className= "form">
            <Navbar/>
            <h1>Sign Up</h1>
                <form onSubmit={this.handleSignupClick}>
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control" name ="username" placeholder="Username"  onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Firstname</label>
                    <input type="text" className="form-control" name= "firstnamr" placeholder="FirstName" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label >Last Name</label>
                    <input type="text" className="form-control" name = "lastname" placeholder="LastName" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" name = "email" placeholder="EmailAddress" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" name= "password" placeholder="Password" onChange={this.handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
                </form>
            </div>
        )
    }
}
