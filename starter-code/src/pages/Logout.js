import React, { Component } from 'react';
import { logout } from '../utils/auth';
import Header from "../components/Header";

export default class Logout extends Component {
    state = {
        error: null
    }

    componentDidMount(){
        logout()
            .then(()=>{
                this.props.history.push("/");
            })
            .catch((error)=>{
                this.setState({
                    error
                });
            });
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 offset-lg-3 my-3">
                            <h1>Logging out...</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
