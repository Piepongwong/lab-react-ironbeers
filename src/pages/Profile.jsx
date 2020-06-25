import React, { Component } from 'react'
import {getUser} from './../utils/auth'
import './Profile.scss'


class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    let user = getUser();
    if(user === null){
      return (<h3>Please login or sign up!</h3>)
    } else{
      return (
        <div className='Profile'>
          
          <h3>Your profile page</h3>
          <table>
            <tbody>
              <tr>
                <td><strong>Username:</strong></td>
                <td>{user.username}</td>
              </tr>
                <td><strong>Firstname:</strong></td>
                <td>{user.firstname}</td>
              <tr>
                <td><strong>Lastname:</strong></td>
                <td>{user.lastname}</td>         
              </tr>
              <tr>       
                <td><strong>E-mail address:</strong></td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    
  }
}

export default Profile
