import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        // <div>
        //     <Link to="/">Home</Link>
        //     <Link to="/beers">All beers</Link>
        //     <Link to="/random">Random</Link>
        //     <Link to="/new-beer">New beer</Link>
        //     <Link to="/new-beer-img">New beer (w/ image)</Link>
        //     <Link to="/signup">Sign up</Link>
        //     <Link to="/login">Log in</Link>
        //     <Link to="/logout">Log out</Link>
        // </div>



<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <Link className="navbar-brand" to="/">Ironbeers</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/beers">All beers</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/random">Random</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Log in</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hi Username!
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/profile">Profile</Link>
          <Link className="dropdown-item" to="#">My beers</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/logout">Log out</Link>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

        
    )
}
