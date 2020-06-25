import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      userlogin: null
    }
  }

  componentDidMount(){
    axios.post("https://ih-beers-api.herokuapp.com/auth/login", this.state.userLogin)
  }

  handleChange(event){
    let loginDetails = {...this.state.userlogin};
    loginDetails[event.target.name] = event.target.value;
    this.setState({
      userLogin: loginDetails
    })
  }

  render() {
    return (
      <div className="Login form-class">
        <form> 
          <label>Email address</label>
          <input type="text" name="email" onChange={this.handleChange} placeholder="Email address.."/>
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} placeholder="********"/>
          <button onClick={this.postTheBeer} type="submit">Login!</button>
          <p>{this.state.error}</p>
        </form>
      </div>
    )
  }
}

export default Login
