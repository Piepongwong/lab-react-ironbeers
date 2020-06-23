import React, { Component } from 'react';
import Header from "../components/Header";


export default class RandomBeer extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <h1>Just a random beer.</h1>
                </div>
            </div>
        )
    }
}
