import React, { Component } from 'react'
import {logout} from './../utils/auth'
import {Redirect} from 'react-router-dom';

class Logout extends Component {

  state = {
    
  }

  componentDidMount(){
    logout()
    .then(()=>{
      this.props.history.push("/");
    })
    .catch((error)=>{
      console.log(error);
      this.setState({
        error: error.response.data.message
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Logging out..</h3>
      </div>
    )
  }
}

export default Logout
