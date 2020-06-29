import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className = "navbar navbar-light bg-light">
            <Link className="navbar-brand mb-0 h1" to="/">
                                        Home
                 </Link>
            <Link to="/beers">One Beer</Link>
            <Link to="/randombeer">Random Beer</Link>
            <Link to = "/newbeer">New Beer</Link>

        </div>
    )
}
