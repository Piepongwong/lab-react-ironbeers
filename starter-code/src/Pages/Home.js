import React, { Component } from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import LinkComponent from '../Components/LinkComponent'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-lg-6">
                    <Link to={`/allBeers`}><LinkComponent name={"All Beers"} image={"../images/beers.png"}/></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6">
                    <Link to={'/newBeer'}><LinkComponent name={"New Beer"} image={"../images/new-beer.png"}/></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6">
                    <Link to={'/random-beer'}><LinkComponent name={"Random Beer"} image={"../images/random-beer.png"}/></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6">
                    <Link to={'/new-beer-without-image'}><LinkComponent name={"New Beer without image"} image={"../images/new-beer.png"}/></Link>
                </div>               
            </div>       
      </div>     
    );
  }
}

export default Home;
