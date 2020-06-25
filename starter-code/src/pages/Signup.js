import React, { Component } from 'react'; 
import Header from "../components/Header";
import {signup} from "../utils/auth";
import "./Forms.css";

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
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

    signUpUser(e){
        e.preventDefault();
        signup(this.state.user)
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
                            <form onSubmit={this.signUpUser} className="p-3">
                                <div className="form-group">
                                    <label className="form-label" for="Username">Username</label>
                                    <input type="text" className="form-control form-box" onChange={this.handleChange} name="username"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="Firstname">Firstname</label>
                                    <input type="text" className="form-control form-box" onChange={this.handleChange} name="firstname"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="Lastname">Lastname</label>
                                    <input type="text" className="form-control form-box" onChange={this.handleChange} name="lastname"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="Email">Email</label>
                                    <input type="email" className="form-control form-box" onChange={this.handleChange} name="email"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="Password">Password</label>
                                    <input type="password" className="form-control form-box" onChange={this.handleChange} name="password"/>
                                </div>

                                <button className="btn btn-info" type="submit">SignUp</button>

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
