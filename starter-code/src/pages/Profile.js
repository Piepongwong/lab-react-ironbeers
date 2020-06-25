import React, { Component } from 'react';
import Header from "../components/Header";
import {getUser} from "../utils/auth";
import {Link, Route} from "react-router-dom";
import EditProfile from "./EditProfile";
import MyBeers from "./MyBeers";

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.showForm = this.showForm.bind(this);
        this.userUpdate = this.userUpdate.bind(this);
    }

    state = {
        user: null,
        error: null
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
        this.showForm();
        let user = response;
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
                        <div className="col-md-12 col-lg-4 d-flex justify-content-center offset-lg-4 my-3">
                            <Link to={`/user/profile/edit`}><button onClick={this.showForm} className="btn btn-info buttons">Edit Profile</button>
                            </Link>
                        </div>
                    </div>

                            
                    <MyBeers/>
                            

                    <div className="row">
                        <div className="col-md-12 col-lg-6 offset-lg-3">
                            {
                                this.state.formShowing && <Route path={`/user/profile/edit`} render={(props) => <EditProfile {...props} userUpdate={this.userUpdate} />} />
                            }
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

