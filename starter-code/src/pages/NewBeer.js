import React, { Component } from 'react';
import Header from "../components/Header";


export default class NewBeer extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <h1>Just one new beer.</h1>
                </div>
            </div>
        )
    }
}
