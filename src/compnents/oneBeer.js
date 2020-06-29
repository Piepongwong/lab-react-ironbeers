import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class oneBeer extends Component {
    render() {
        return (
            <div>
                <Link to = {`/onebeer/${this.props.id}`}>
                    <h1>{this.props.name}</h1>
                    <img src = {this.props.image} alt ={this.props.name}/>
                    <p>{this.props.tagline}</p>
                    <p>{this.props.contributed_by}</p>
                    

                </Link>
            </div>
        )
    }
}
