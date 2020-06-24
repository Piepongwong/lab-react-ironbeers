import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";
import {Link, Route} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./DetailsBeer.css";
import EditBeer from "./EditBeer";


export default class DetailsBeer extends Component {
    constructor(props){
        super(props);
        this.deleteBeer = this.deleteBeer.bind(this);
        this.showForm = this.showForm.bind(this);

        this.state = {
          beer: null,
          formShowing: false
        };
      }
    
      componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers")
            .then(response => {
                let beers = response.data;
                let beer = beers.find((oneBeer)=> oneBeer._id === this.props.match.params.beerId);
                this.setState({beer});
            })
            .catch((error)=>{
                this.setState({
                    error
                });
            });
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
                this.props.history.push(`/beers`);
            })
            .catch((err) => {
                this.setState({
                    error: err.response.data.message
                });
            });
    }

    showForm(){
        this.setState({
          formShowing: !this.state.formShowing
        });
    }


    render() {
        if(this.state.beer === null ) return <h1>Loading...</h1>;

        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 d-flex justify-content-center offset-lg-4 beer-box">
                                <img className="beer-image img-fluid m-3" src={this.state.beer.image_url} alt="BEER"/>
                            </div>
                            <div className="col-md-12 col-lg-4 d-flex justify-content-between offset-lg-4 beer-box">
                                <h3>{this.state.beer.name}</h3>
                                <h3 class="grey-level">{this.state.beer.attenuation_level}</h3>
                            </div>
                            <div className="col-md-12 col-lg-4 d-flex justify-content-between offset-lg-4 align-text-bottom beer-box ">
                                <h4>{this.state.beer.tagline}</h4>
                                { this.state.beer.first_brewed && <h6 >{this.dateFormatting(this.state.beer.first_brewed)}</h6> }
                            </div>
                            <div className="col-md-12 col-lg-4 offset-lg-4 beer-box">
                                <p>{this.state.beer.description}</p>
                            </div>
                            <div className="col-md-12 col-lg-4 offset-lg-4 beer-box">
                                <h6 class="grey-level">{this.state.beer.contributed_by}</h6>
                            </div>
                            <div className="col-md-12 col-lg-4 d-flex justify-content-between offset-lg-4 beer-box mb-3">
                                <Link to={`/beers/edit/${this.state.beer._id}`}><button onClick={this.showForm} class="btn btn-info buttons">Edit Beer</button>
                                </Link>
                                
        
                                <Link to={`/edit-picture/${this.state.beer._id}`}><button class="btn btn-info buttons">Edit Picture</button>
                                </Link>
                                <button onClick={this.deleteBeer} class="btn btn-info buttons"><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </div>
                            <div>
                                {
                                    this.state.formShowing && <Route path={`/beers/edit/:beerId`} component={EditBeer} />
                                }
                            </div>
                    </div>  
                </div>
            </div>
        )
    }
}
