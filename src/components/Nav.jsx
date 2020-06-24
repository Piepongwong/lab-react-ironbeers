import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to = "/">
                <img src="https://img.icons8.com/flat_round/64/000000/home--v1.png"/>
                </Link>   
            </nav>
        );
    }
}

export default Nav;
