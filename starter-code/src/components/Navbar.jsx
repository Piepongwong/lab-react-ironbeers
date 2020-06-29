import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../utils/auth';

function Navbar() {
  let user = getUser();

  if (user) {
    return(
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to='/'>Home</Link>
          <Link className="navbar-brand" to='/beers'>Beers</Link>
          <Link className="navbar-brand" to='/beers/random'>Random beer</Link>
          <Link className="navbar-brand" to='/beers/my-beers'>My beers</Link>
          <Link className="navbar-brand" to='/beers/new'>New beer</Link>
          <Link className="navbar-brand" to='/user/profile'>Welcome {user.username}</Link>
          <Link className="navbar-brand" to='/user/logout'>Logout</Link>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to='/'>Home</Link>
          <Link className="navbar-brand" to='/beers'>Beers</Link>
          <Link className="navbar-brand" to='/beers/random'>Random beer</Link>
          <Link className="navbar-brand" to='/beers/new'>New beer</Link>
          <Link className="navbar-brand" to='/user/sign-up'>Sign up</Link>
          <Link className="navbar-brand" to='/user/login'>Login</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;