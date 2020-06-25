import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import DefaultLayout from "../layout/Default";
import './BeerList.css';

class BeerList extends Component {
    constructor(props) {
        super(props);
    }
    
    state={
        beers:[]
    }

    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
            .then(response=>{
                this.setState({
                    beers:response.data
                })
            })
            .catch(error=>{
                this.setState({
                    error
                })
            })
        
    }
    render() {

        if(this.state.beers.length === 0) return <h1>Loading...</h1>
        else{
            return (
            <DefaultLayout>
                <div>
                    {
                        this.state.beers.map((beer,index)=> (
                            <Link className="beer-card" to={`/beer-detail/${beer._id}`}>
                                <Card
                                    key={index.toString()}
                                    image_url={beer.image_url}
                                    name={beer.name}
                                    tagline={beer.tagline}
                                    first_brewed={beer.first_brewed}
                                    description={beer.description}
                                    attenuation_level={beer.attenuation_level}
                                    contributed_by={beer.contributed_by}
                                />
                                 <hr/>
                            </Link>
                           
                        ))
                    }
                </div>
            </DefaultLayout>

        );
        }

    }
}

export default BeerList;