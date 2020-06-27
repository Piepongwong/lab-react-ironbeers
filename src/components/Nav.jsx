import React, { Component } from 'react';
import '../styles/nav.scss'
import {Link} from 'react-router-dom'
import home from '../images/home.png'
import beerglass from '../images/beer-glass.png'
import {getUser} from '../utils/auth';
class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to = "/">
                    <img src={beerglass}/>
                </Link> 
                <Link to = "/landing">
                    <img src={home}/>
                </Link>  
            </nav>
        );
    }
}
export default Nav;
