import React, { Component } from 'react'
import { login } from '../utils/auth'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    state = {
        user: {
            username: "",
            password: ""
        },
        error: null
    }

    handleInputChange(e){
        let userCopy = {...this.state.user};
        userCopy[e.target.name] =  e.target.value;
        this.setState({
            user: userCopy
        })
    }

    handleLoginClick(){
        login(this.state.user)
        .then(()=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/profile")
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleLoginClick}>
                <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" name ="username" placeholder="Username"  onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlfor="password">Username</label>
                    <input type="password" className="form-control" name ="username" placeholder="Username"  onChange={this.handleInputChange}/>
                </div>
                </form>
            </div>
        )
    }
}
