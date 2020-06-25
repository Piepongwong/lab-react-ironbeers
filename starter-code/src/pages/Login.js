import React, { Component } from 'react'; 
import Header from "../components/Header";
import {login} from "../utils/auth";
import "./Forms.css";

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    state = {
        user: {}
    }

    handleChange(e){
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({
            user
        });
    }

    loginUser(e){
        e.preventDefault();
        login(this.state.user)
        .then((response)=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/user/profile"); 
            });
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data});
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
                            <form onSubmit={this.loginUser} className="p-3">
                                <div className="form-group">
                                    <label className="form-label" for="Username">Username</label>
                                    <input type="text" className="form-control form-box" onChange={this.handleChange} name="username"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="Password">Password</label>
                                    <input type="password" className="form-control form-box" onChange={this.handleChange} name="password"/>
                                </div>

                                <button className="btn btn-info" type="submit">Login</button>

                            </form>
                            {
                                this.state.error && <p>{this.state.error}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
