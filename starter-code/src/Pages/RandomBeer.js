import React, { Component } from "react";
import axios from "axios";
import Card from "../Components/Card";
import DefaultLayout from "../layout/Default";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    beer: null,
  };

  componentDidMount() {

    axios
      .get('https://ih-beers-api.herokuapp.com/beers/random')
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

  render() {
    if (this.state.beer === null) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <DefaultLayout>
          <Card
              image_url={this.state.beer.image_url}
              name={this.state.beer.name}
              tagline={this.state.beer.tagline}
              first_brewed={this.state.beer.first_brewed}
              description={this.state.beer.description}
              attenuation_level={this.state.beer.attenuation_level}
              contributed_by={this.state.beer.contributed_by}
          />
        </DefaultLayout>
      );
    }
  }
}

export default RandomBeer;
