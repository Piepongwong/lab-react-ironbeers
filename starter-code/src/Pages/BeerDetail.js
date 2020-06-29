import React, { Component } from "react";
import axios from "axios";
import Card from "../Components/Card";
import UpdateBeer from "./UpdateBeer";
import DefaultLayout from "../layout/Default";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.toggleUpdateFormVisibility = this.toggleUpdateFormVisibility.bind(this)
  }

  state = {
    beer: null,
    updateFormVisible: false
  };

  deleteHandler(){
    var beerId = this.props.match.params.id;
    axios.get(`https://ih-beers-api.herokuapp.com/beers/delete/${beerId}`)
        .then((response)=>{
            this.props.history.push(`/allBeers`)
        })
  }

  updateHandler(beerId){
      var beerId = this.props.match.params.id;
      axios
        .get(`https://ih-beers-api.herokuapp.com/beers/${beerId}`)
        .then((response) => {
            this.setState({
            beer: response.data,
            });
        })
        .catch((error) => {
            this.setState({
            error,
            });
      });
  }

  componentDidMount() {
    var beerId = this.props.match.params.id;

    axios
      .get(`https://ih-beers-api.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }
  toggleUpdateFormVisibility(){
    this.setState({
        updateFormVisible: !this.state.updateFormVisible
    })
  }
  render() {
    if (this.state.beer === null) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <DefaultLayout>
        <div className="container-fluid">
            <div className="row justify-content-center py-2">
                <div className="col-2 left">
                    <img className="img-fluid" src={this.state.beer.image_url} alt={this.state.beer.name}/>
                </div>
                <div className="col-10 right">
                    <h3>{this.state.beer.name}</h3>
                    <p className="tagline">{this.state.beer.tagline}</p>
                    <p>{this.state.beer.description}</p>
                    <p><small><b>First Brewed</b></small>{this.state.beer.first_brewed}</p>
                    <p><small><b>attenuation Level </b></small>{this.state.beer.attenuation_level}</p>
                    <p><small><b>created By </b></small>{this.state.beer.contributed_by}</p>
                    <button className="btn btn-primary mr-2 mb-2" onClick={this.deleteHandler}>Delete this Beer</button>
                    <button className="btn btn-primary mr-2 mb-2" onClick={this.toggleUpdateFormVisibility}>Update this Beer</button> 
                        <div className="col-12">
                        {
                            this.state.updateFormVisible &&
                                <UpdateBeer 
                                    beer={this.state.beer}
                                    toggleUpdateFormVisibility={this.toggleUpdateFormVisibility}
                                    updateHandler={()=> {this.updateHandler(this.props.match.params.id)}} 
                                />
                        }
                        </div>
 
                </div>
            </div>
        </div>
        </DefaultLayout>
      );
    }
  }
}

export default BeerDetail;
