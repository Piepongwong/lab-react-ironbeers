import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../styles/beers.scss'
class Beers extends Component {
    constructor(props){
        super(props)
        this.state = {
            beers : []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/user/my-beers", {withCredentials : true})
        .then(response => {
            console.log(response)
            this.setState({beers: response.data})
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.beers.map((oneBeer, index) =>{
                        return (
                            <Link to = {`/beercard/${oneBeer._id}`} key ={oneBeer._id}  style={{ textDecoration: 'none' }}>
                                <div className="beer">
                                    <img src = {oneBeer.image_url} alt = ""/>
                                    <div className="info">
                                        <h1>{oneBeer.name}</h1>
                                        <p>{oneBeer.tagline}</p>
                                        <p><strong>Created by : </strong>{oneBeer.contributed_by}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default Beers;