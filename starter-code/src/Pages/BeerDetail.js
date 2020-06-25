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
      debugger
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
        <div>
        <Card
            image_url={this.state.beer.image_url}
            name={this.state.beer.name}
            tagline={this.state.beer.tagline}
            first_brewed={this.state.beer.first_brewed}
            description={this.state.beer.description}
            attenuation_level={this.state.beer.attenuation_level}
            contributed_by={this.state.beer.contributed_by}
            />
                <button onClick={this.deleteHandler}>Delete this Beer</button>
                <button onClick={this.toggleUpdateFormVisibility}>Update this Beer</button>
                {
                    this.state.updateFormVisible &&
                        <UpdateBeer 
                            beer={this.state.beer}
                            toggleUpdateFormVisibility={this.toggleUpdateFormVisibility}
                            updateHandler={()=> {this.updateHandler(this.props.match.params.id)}} 
                        />
                }
            </div>
        </DefaultLayout>
      );
    }
  }
}

export default BeerDetail;
