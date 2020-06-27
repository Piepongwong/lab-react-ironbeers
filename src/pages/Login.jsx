import React, { Component } from 'react';
import {login} from "../utils/auth";
import '../styles/form.scss'
class Login extends Component {

    constructor(props){
        super(props)
        this.handleloginClick = this.handleloginClick.bind(this)
        this.state = {
            user: {}, 
            error:{}
        }
    }
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        // fix Warning: Can’t perform a React state update on an unmounted component
            this.setState = (state,callback)=>{
            return;
            };
        }
    handleChange = (event) =>{
        let newState = {...this.state.user}
        let { name, value } = event.target;
        newState[name] = value;
        this.setState({
            user: newState
      })
    }
    handleloginClick(e){
        debugger
        e.preventDefault()
        login(this.state.user)
        .then((response)=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/landing") 
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }


    render() {
        return (
            <div className = "form">
                <form onSubmit={(e) => this.handleloginClick(e)} ref = {this.formRef}>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "username" placeholder = "username"/>
                    <input onChange={(e) => this.handleChange(e)} type= "password" name = "password" placeholder = "password"/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;