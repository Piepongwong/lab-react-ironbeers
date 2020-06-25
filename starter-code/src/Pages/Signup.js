import React, { Component } from 'react';
import {signup} from "../utils/auth";

class Signup extends Component {
    constructor(props) {
        debugger
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);        
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

    handleSignupClick(e){
        debugger
        e.preventDefault();
        signup(this.state.user)
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
            <h1>Signup</h1>
            <form onSubmit={this.handleSignupClick}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="username" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" className="form-control" placeholder="firstnam" onChange={this.handleInputChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" className="form-control" placeholder="lastname" onChange={this.handleInputChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="email" onChange={this.handleInputChange} />
                 </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="password" onChange={this.handleInputChange}  />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>              
            </form>
        </div>
        );
    }
}

export default Signup;