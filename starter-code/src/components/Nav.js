import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { getUser, logout } from "../utils/auth";

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: getUser()
        }
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser() {
        logout();
        this.setState({ user: null });
    }
    render() {
        return (
            <header className="App-header">
                <div className="home">
                    < Link to={`/`}>
                        <img src="/home.png" className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div className="user-nav">
                    {this.state.user ?
                        <>
                            <Link to={"/user/profile"} className="profile-link"><p>Hello {this.state.user.firstname}</p></Link>
                            <a href="/" onClick={this.logoutUser} className="logout">Log out</a>
                        </>
                        :
                        <>
                            <Link to="/user/login"><p>Log In</p></Link>
                            <Link to="/auth/signup"><p>Sign Up</p></Link>
                        </>
                    }
                </div>
            </header>
        )
    }
}