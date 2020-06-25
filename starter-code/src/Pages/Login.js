import React, { Component } from 'react';
import {login} from "../utils/auth";

class Signup extends Component {
    constructor(props) {
        debugger
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);        
    }

    state={
        user:{},
        error:null
    }

    handleInputChange(e){
        let userCopy = {...this.state.user};
        userCopy[e.target.name] =  e.target.value;
        
        this.setState({
            user: userCopy
        })
        console.log(this.state.user);
    }

    handleLogin(e){
        debugger
        e.preventDefault();
        login(this.state.user)
        .then(()=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/allBeers")
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }


    
    render() {
        return (
            <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="username" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="password" onChange={this.handleInputChange}  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>              
            </form>
        </div>
        );
    }
}

export default Signup;