import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export default class DetailsBeer extends Component {
    constructor(props){
        super(props)
        this.deleteBeer = this.deleteBeer.bind(this);
        this.state = {
          beers: []
        }
      }
    
    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers")
            .then(response => {
            this.setState({beers: response.data})
            })
    }

    dateFormatting(date){
        let dateFormat = new Date(date);
        let month = dateFormat.getMonth() + 1;
        if (month < 10)  month = '0' + month;
        let year = dateFormat.getFullYear();
        return `${month}/${year}`;
    }

    deleteBeer(e){
        e.preventDefault();
        axios.get(`https://ih-beers-api.herokuapp.com/beers/delete/${this.props.match.params.beerId}`)
            .then((response)=> {
                this.props.history.push(`/beers`)
            })
            .catch((err) => {
                this.setState({
                    error: err.response.data.message
                });
            });
    }


    render() {
        if(this.state.beers.length === 0 ) return <h1>Loading...</h1>;
        let beer = this.state.beers.find((beer)=> beer._id === this.props.match.params.beerId)

        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <div className="col-7">
                        <img className="beer-image" src={beer.image_url} alt="BEER"/>
                        <h3>{beer.name}</h3>
                        <h3>{beer.attenuation_level}</h3>
                        <h4>{beer.tagline}</h4>
                        { beer.first_brewed && <h6>{this.dateFormatting(beer.first_brewed)}</h6> }
                        <p>{beer.description}</p>
                        <h6>{beer.contributed_by}</h6>
                        <Link to={`/edit-beer/${beer._id}`}><button>Edit Beer</button>
                        </Link>
                        <button onClick={this.deleteBeer}><FontAwesomeIcon icon={faTrashAlt}/></button>

                    </div>  
                </div>
            </div>
        )
    }
}
