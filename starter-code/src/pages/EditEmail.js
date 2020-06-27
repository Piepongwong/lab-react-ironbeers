import React, { Component } from 'react';
import axios from "axios";
import "./Forms.css";
import {getUser} from "../utils/auth"; 
import qs from "qs"; 


export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    state = {
        user: null,
        error: null
    }

    componentDidMount() {
        let user = getUser()
        this.setState({user});
    }

    handleChange(e){
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({
            user
        });
    }

    editUser(e){
        e.preventDefault();

        axios({
            url: `https://ih-beers-api.herokuapp.com/user/profile/edit/email`,
            data: qs.stringify(this.state.user),
            withCredentials: true,
            method: "POST"
        })
        .then((response)=>{
            this.props.userUpdate(response.data);
            this.props.history.push(`/user/profile`);
        })
        .catch((err)=>{
            this.setState({
                error: err.response.data.message
            });
        });
    }

    render() {
        if(this.state.user === null ) return <h1>Loading...</h1>;
        return (
            <div>
                <form onSubmit={this.editUser} className="p-3">
                    {/* <div className="form-group">
                    <label className="form-label" for="Username">Username</label>
                        <input type="text"  className="form-control form-box" name="username" onChange={this.handleChange} value={this.state.user.username}/>
                    </div> */}
                    {/* <div className="form-group">
                    <label className="form-label" for="Firstname">Firstname</label>
                        <input type="text"  className="form-control form-box" name="firstname" onChange={this.handleChange} value={this.state.user.firstname}/>
                    </div>
                    <div className="form-group">
                    <label className="form-label" for="Lastname">Lastname</label>
                        <input type="text" class="form-control form-box" name="lastname" onChange={this.handleChange} value={this.state.user.lastname} />
                    </div> */}
                    <div className="form-group">
                        <label className="form-label" for="Email">Email</label>
                        <input type="text"  className="form-control form-box" name="email" onChange={this.handleChange} value={this.state.user.email}/>
                    </div>
                    {/* <div className="form-group">
                    <label className="form-label" for="Password">Password</label>
                        <input type="password"  className="form-control form-box" name="password" onChange={this.handleChange} value={this.state.user.password}/>
                    </div> */}
                    {/* <input type="hidden" name="name" value={this.state.user.username}/> */}
                    <input type="hidden" name="name" value={this.state.user._id}/>

                    <button className="btn btn-info" type="submit">Edit</button>
                </form>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
            </div>
        )
    }
}
