import React, { Component } from 'react'
import {signup} from "../utils/auth";
import './../App.scss';
import { Link, Route } from 'react-router-dom';

class Singup extends Component {
  constructor(props) {
    super(props);
    this.postSignUp = this.postSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  state = {
      user: null,
      error: null
  }

  postSignUp(event){
    event.preventDefault();
    signup(this.state.user)
    .then((response)=> {
        this.setState({
            error: null
        }, ()=> {
            this.props.history.push("/profile") 
            /* 
                we're redirecting programatically using the history props that react-router adds to every
                component rendered through <Route />
            */
        })
    })
    .catch((error)=> {
        this.setState({error: error.response && error.response.data})
    })
  }

  handleChange(event){
    let user = {...this.state.user}
    user[event.target.name] = event.target.value
    this.setState({
      user
    })
  }

  render() {
    return (
      <div className="SignUp form-class">
          <form> 
            <label>Username</label>
            <input type="text" name="username" onChange={this.handleChange} placeholder="Username"/>
            <label>Firstname</label>
            <input type="text" name="firstname" onChange={this.handleChange} placeholder="Firstname.."/>
            <label>Lastname</label>
            <input type="text" name="lastname" onChange={this.handleChange} placeholder="Lastname.."/>
            <label>Email address</label>
            <input type="text" name="email" onChange={this.handleChange} placeholder="Email address.. "/>
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleChange} placeholder="Min. 8 character, min 1 letter and number"/>
            <button onClick={this.postSignUp} type="submit">Sign up!</button>
            <p>{this.state.error}</p>
          </form>
        </div>
    )
  }
}

export default Singup
