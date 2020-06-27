import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {getUser} from "../utils/auth";
import '../styles/Landing.scss'
class Landing extends Component {
    render() {
        let user = getUser()
   
        return (
            user===null? 
            <div className="landing">
                
                <div className ="box">
                    <Link style={{ textDecoration: 'none' }} to = "/auth/signup">
                        <h1>SIGN UP</h1>
                    </Link>
                </div>
                <div className ="box">
                    <Link style={{ textDecoration: 'none' }} to = "/auth/login">
                        <h1>LOG IN</h1>
                    </Link>
                </div>
            </div>
            :
            <div className="landing">
                <div className ="box">
                    <h1>Hello {user.firstname} {user.lastname}, welcome to your profile, Your email is {user.email} and your username is {user.username}</h1>
                </div>
                <div className ="box">
                    <Link style={{ textDecoration: 'none' }} to = "/auth/logout">
                        <h1>LOG OUT</h1>
                    </Link>
                </div>
                <div className ="box">
                    <Link style={{ textDecoration: 'none' }} to = "/user/myBeers">
                        <h1>MY BEERS</h1>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Landing;
