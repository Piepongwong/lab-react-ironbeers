import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
    render() {
        return (
            <nav className="nav justify-content-center mb-2 bg-info ">
                <Link to="/">
                    <li className="nav-item text-white">
                        <h1 className="nav-link "><FontAwesomeIcon icon={faHome}/></h1>

                    </li>
                </Link>
            </nav>
        )
    }
}
