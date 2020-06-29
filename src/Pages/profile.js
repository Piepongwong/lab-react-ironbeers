import React, { Component } from 'react';
import { getUser } from 'getUser';
export default class Profile extends Component {
   
    render() {
        let user =getUser()

        return (
            <div>
            <h6>UserName:{user.username}</h6>   
            <h6>FirstName:{user.firstname}</h6>     
            <h6>LastName:{user.lastname}</h6>     
            <h6>Email:{user.email}</h6>     
            </div>
        )
    }
}
