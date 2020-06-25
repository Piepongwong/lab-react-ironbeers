import React, { Component } from 'react';
import axios from 'axios';
import Beer from './../components/Beer';

class MyBeers extends Component {
  constructor(props) {
    super(props)
  };

  state = {
    myBeers: [],
    error: null
  }

  componentDidMount() {
    axios.get('https://ih-beers-api.herokuapp.com/user/my-beers', {withCredentials: true})
    .then(response => {
        this.setState({
          myBeers: response.data
        })
    })
    .catch((error)=>{
      console.log(error);
      this.setState({
        error: error.response.data.message
      })
    })
  };

  render() {
    if(this.state.myBeers.length === 0){
      return(<h3>Loading.. or no beer yet..?? You can add one to the collection quickly!</h3>)
    } else{
      return (
        <div className="MyBeers">
          {
            this.state.myBeers.map((beer, index)=>(
              <Beer key={`${index}-${beer.name}`} id={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} contributed_by={beer.contributed_by} />
            ))
          }
        </div>
      )
    }
  };
};

export default MyBeers
