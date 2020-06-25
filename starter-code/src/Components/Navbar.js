import React from 'react';
import {getUser} from '../utils/auth'

function Navbar(props) {
  let user = getUser();

  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      {
        user ? 
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/logout">Logout</a>
            <a className="navbar-brand" href = "/profile">Profile</a>
          </div>
          :
          <div className="container">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/signup">Signup</a>
          </div>
      }

    </nav>
  );
}

export default Navbar;