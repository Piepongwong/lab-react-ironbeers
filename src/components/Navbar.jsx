import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import {getUser} from './../utils/auth';

function Navbar() {
  let user = getUser();

  if(user === null){
    return(
      <div className="Navbar">
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/login'><h3>Login</h3></Link>
        <Link to='/signup'><h3>Signup</h3></Link>
      </div>
    )
  } else{
    return (
      <div className="Navbar">
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/beers'><h3>All beers</h3></Link>
        <Link to='/random-beer'><h3>Random beer</h3></Link>
        <Link to='/new-beer'><h3>New beer</h3></Link>
        <Link to='/my-beer'><h3>My beer</h3></Link>
        <Link to='/profile'><h3>Profile</h3></Link>
        <Link to='/logout'><h3>Logout</h3></Link>
      </div>
    )
  }
}

export default Navbar;
