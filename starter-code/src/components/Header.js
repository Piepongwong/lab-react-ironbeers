import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import {getUser} from "../utils/auth";
import './Header.css';

export default function Profile() {
    let user = getUser();

    if (user) {
        return (
            <nav className="nav justify-content-center mb-3 pt-2 bg-info ">
                <Link to="/" className="link-group">
                    <li className="nav-item text-white">
                        <p className="nav-link navbar-icon "><FontAwesomeIcon icon={faHome}/></p>
                    </li>
                </Link>

                <Link to="/user/profile" className="link-group">
                    <li className="nav-item text-white">
                        <p className="nav-link navbar-icon "><FontAwesomeIcon icon={faUserCircle}/></p>
                    </li>
                </Link>
                <Link to="/user/logout" className="link-group">
                    <li className="nav-item text-white">
                        <p className="nav-link navbar-icon "><FontAwesomeIcon icon={faSignOutAlt}/></p>
                    </li>
                </Link>
            </nav>
        )
    } else {
        return (
            <nav className="nav justify-content-center mb-3 pt-2 bg-info">
                <Link to="/" className="link-group">
                    <li className="nav-item text-white">
                        <p className="nav-link navbar-icon "><FontAwesomeIcon icon={faHome}/></p>
                    </li>
                </Link>
                <Link to="/user/login" className="link-group">
                    <li className="nav-item text-white">
                        <p className="nav-link navbar-icon "><FontAwesomeIcon icon={faSignInAlt}/></p>
                    </li>
                </Link>
                <Link to="/user/signup" className="link-group">
                    <li className="nav-item text-white">
                        <p className="nav-link navbar-link ">Sign Up</p>
                    </li>
                </Link>
            </nav>
        )
    }
}
