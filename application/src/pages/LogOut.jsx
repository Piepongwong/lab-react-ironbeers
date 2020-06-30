import React, { Component } from 'react';
import {logout} from '../utilities/auth';
import DefaultLayout from '../layout/Default';

export default class LogOut extends Component {
    componentDidMount() {
        logout()
            .then(() => {
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <DefaultLayout>
                <h2>Logging out...</h2>
            </DefaultLayout>
        )
    }
}
