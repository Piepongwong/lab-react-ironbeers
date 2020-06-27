import React, { Component } from 'react';
import Header from "../components/Header";
import {getUser, setUser} from "../utils/auth";
import {Link, Route} from "react-router-dom";
import EditProfile from "./EditProfile";
import EditUsername from "./EditUsername";
import EditEmail from "./EditEmail";
import EditPassword from "./EditPassword";



import MyBeers from "./MyBeers";

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.showForm = this.showForm.bind(this);
        this.userUpdate = this.userUpdate.bind(this);
        this.showUsernameForm = this.showUsernameForm.bind(this);
        this.usernameUpdate = this.usernameUpdate.bind(this);
        this.showEmailForm = this.showEmailForm.bind(this);
        this.emailUpdate = this.emailUpdate.bind(this);
        this.showPasswordForm = this.showPasswordForm.bind(this);
        this.passwordUpdate = this.passwordUpdate.bind(this);
    }

    state = {
        user: null,
        error: null,
    }
    
    componentDidMount() {
        let user = getUser()
        this.setState({user});
    }

    showForm(){
        this.setState({
          formShowing: !this.state.formShowing
        });
    }

    userUpdate(response){
        this.showUsernameForm();
        let user = response;
        setUser(user);
        this.setState({
            user
        });
    }

    showUsernameForm(){
        this.setState({
          usernameFormShowing: !this.state.usernameFormShowing
        });
    }

    usernameUpdate(response){
        this.showUsernameForm();
        let user = response;
        setUser(user);
        this.setState({
            user
        });
    }

    showEmailForm(){
        this.setState({
          emailFormShowing: !this.state.emailFormShowing
        });
    }

    emailUpdate(response){
        this.showEmailForm();
        let user = response;
        setUser(user);
        this.setState({
            user
        });
    }

    showPasswordForm(){
        this.setState({
          passwordFormShowing: !this.state.passwordFormShowing
        });
    }

    passwordUpdate(response){
        this.showPasswordForm();
        let user = response;
        setUser(user);
        this.setState({
            user
        });
    }

    render() {
        if(this.state.user === null ) return <h1>Loading...</h1>;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 d-flex justify-content-center offset-lg-3">
                            <h3>{this.state.user.username}</h3>
                        </div>
                        <div className="col-md-12 col-lg-6 d-flex justify-content-center offset-lg-3">
                            <p>Name: <span>{this.state.user.firstname}</span><span> {this.state.user.lastname}</span></p>
                        </div>
                        <div className="col-md-12 col-lg-6 offset-lg-3">
                            <p>Email: {this.state.user.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 d-flex justify-content-center offset-lg-2">
                            <h5>Edit your Profile</h5>
                        </div>

                        <div className="col-md-12 col-lg-8 d-flex justify-content-center offset-lg-2 mb-4">
                            <Link to={`/user/profile/edit`}><button onClick={this.showForm} className="btn btn-info buttons m-1">Profile</button>
                            </Link>
                            <Link to={`/user/profile/editusername`}><button onClick={this.showUsernameForm} className="btn btn-info buttons m-1">Username</button>
                            </Link>
                            <Link to={`/user/profile/editemail`}><button onClick={this.showEmailForm} className="btn btn-info buttons m-1">Email</button>
                            </Link>
                            <Link to={`/user/profile/editpassword`}><button onClick={this.showPasswordForm} className="btn btn-info buttons m-1">Password</button>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-6 offset-lg-3">
                            {
                                this.state.formShowing && <Route path={`/user/profile/edit`} render={(props) => <EditProfile {...props} userUpdate={this.userUpdate} />} />
                            }
                        </div>
                        <div className="col-md-12 col-lg-6 offset-lg-3">
                            {
                                this.state.usernameFormShowing && <Route path={`/user/profile/editusername`} render={(props) => <EditUsername {...props} userUpdate={this.usernameUpdate} />} />
                            }
                        </div>
                        <div className="col-md-12 col-lg-6 offset-lg-3">
                            {
                                this.state.emailFormShowing && <Route path={`/user/profile/editemail`} render={(props) => <EditEmail {...props} userUpdate={this.emailUpdate} />} />
                            }
                        </div>
                        <div className="col-md-12 col-lg-6 offset-lg-3">
                            {
                                this.state.passwordFormShowing && <Route path={`/user/profile/editpassword`} render={(props) => <EditPassword {...props} userUpdate={this.passwordUpdate} />} />
                            }
                        </div>
                    </div>
 
                    <MyBeers/>
                            
                    
                </div>
                
            </div>
        )
    }
}

