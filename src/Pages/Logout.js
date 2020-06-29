import React, { Component } from 'react'
import { logout } from '../utils/auth'

export default class Logout extends Component {

    componentDidMount(){
        logout()
            .then(()=> {
                this.props.history.push("/");
            })
            .catch((err)=> {
            })
    }

    render() {
        
        return (
            
                <h1>Logging out...</h1>
            
        )
    }
}

