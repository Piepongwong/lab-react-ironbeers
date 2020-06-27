import React, { Component } from 'react';
import {signup} from "../utils/auth";
import '../styles/form.scss'
class Signup extends Component {

    constructor(props){
        super(props)
        this.handleSignupClick = this.handleSignupClick.bind(this)
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
    handleSignupClick(e){
        e.preventDefault()
        signup(this.state.user)
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
                <form onSubmit={(e) => this.handleSignupClick(e)} >
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "username" placeholder = "Username"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "firstname" placeholder = "firstname"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "lastname" placeholder = "lastname"/>
                    <input onChange={(e) => this.handleChange(e)} type= "text" name = "email" placeholder = "email"/>
                    <input onChange={(e) => this.handleChange(e)} type= "password" name = "password" placeholder = "password"/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Signup;
