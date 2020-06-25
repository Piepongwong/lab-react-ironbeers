import React, { Component } from 'react';
import {getUser} from './../utils/auth';
import './Profile.scss';
import './../App.scss';
import axios from 'axios'


class Profile extends Component {
  constructor(props){
    super(props);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  state = {
    profile: getUser(),
    newProfile: getUser(),
    toggleForm: true,
    error: null
  }

  editProfile(event){
    event.preventDefault();
    axios({
      url: 'https://ih-beers-api.herokuapp.com/user/profile/edit',
      data: this.state.newProfile,
      withCredentials: true,
      method: "post"
    })
    .then((response)=>{
      this.setState({
        profile: response.data
      });
      this.toggleEditForm();
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  handleChange(event){
    let myProfile = {...this.state.newProfile};
    myProfile[event.target.name] = event.target.value;
    this.setState({
      newProfile: myProfile
    })
  }

  toggleEditForm(){
    this.setState({
      toggleForm: !this.state.toggleForm
    })
  }

  render() {
    let user = getUser();
      return( 
        <div className="form-class">
          {
            user === null ?
            <h3>Please login or sign up!</h3> :
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
              <button onClick={this.toggleEditForm}>Edit my profile</button>
            </div>
          }
          {
            this.state.toggleForm === false ?
            <form> 
              <label>Username: </label>
              <input type="text" name="username" value={this.state.newProfile.username} onChange={this.handleChange}/>
              <label>Firstname: </label>
              <input type="text" name="firstname" value={this.state.newProfile.firstname} onChange={this.handleChange}/>
              <label>Lastname: </label>
              <input type="text" name="lastname" value={this.state.newProfile.lastname} onChange={this.handleChange}/>
              <label>E-mail address: </label>
              <input type="text" name="email" value={this.state.newProfile.email} onChange={this.handleChange}/>
              <label>Password:</label>
              <input type="password" name="password" value={this.state.newProfile.password} onChange={this.handleChange}/>
              <button onClick={this.editProfile} type="submit">Submit change!</button>
              <p>{this.state.error}</p>
            </form>:
            <p></p>
          }
        </div>
      )
  }
}

export default Profile
