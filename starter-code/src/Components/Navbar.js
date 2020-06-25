import React from 'react';
import {getUser} from '../utils/auth'
import { faHome, fas, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
  let user = getUser();

  return (
    <nav className="navbar navbar-dark bg-dark mb-3 justify-content-center">
      {
        user ? 
          <div>
            <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faHome} /></a>
            <a className="navbar-brand" href="/logout">Logout</a>
            <a className="navbar-brand" href = "/profile">Profile</a>
          </div>
          :
          <div>
            <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faHome} /></a>
              <a className="navbar-brand" href="/signup"><FontAwesomeIcon icon={fas, faUserPlus} /></a>
              <a className="navbar-brand" href="/login">Login</a>
          </div>
      }

    </nav>
  );
}

export default Navbar;