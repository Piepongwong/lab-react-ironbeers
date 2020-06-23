import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <h3>HOME</h3>
                </Link>
            </nav>
        )
    }
}
