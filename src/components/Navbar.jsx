import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
    return (
        <div className="Navbar">
            <Link to='/'><h2>Home</h2></Link>
        </div>
    )
}

export default Navbar;
