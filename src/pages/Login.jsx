import React, { Component } from 'react';
import {login} from './../utils/auth'
import './../App.scss'
import { Link, Route } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.postLogin = this.postLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      user: {},
      error: null
    }
  }

  postLogin(event){
    event.preventDefault();
    login(this.state.user)
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
        this.setState({
          error: error
        })
    })
  }

  handleChange(event){
    let loginDetails = {...this.state.user};
    loginDetails[event.target.name] = event.target.value;
    this.setState({
      user: loginDetails
    })
  }

  render() {
    return (
      <div className="Login form-class">
        <form> 
          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange} placeholder="Username.."/>
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} placeholder="********"/>
          <button onClick={this.postLogin} type="submit">Login!</button>
        </form>
      </div>
    )
  }
}

export default Login
