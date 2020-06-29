import React, { Component } from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import LinkComponent from '../Components/LinkComponent';
import DefaultLayout from "../layout/Default";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultLayout>
      <div className="container">
            <div className="row py-2">
                <div className="col-xs-12 col-sm-4 col-lg-6 py-2 px-2">
                    <Link className="link" to={`/allBeers`}><LinkComponent name={"All Beers"} image={"../images/beers.png"}/></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6 py-2 px-2">
                    <Link className="link" to={'/newBeer'}><LinkComponent name={"New Beer"} image={"../images/new-beer.png"}/></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6 py-2 px-2">
                    <Link className="link" to={'/random-beer'}><LinkComponent name={"Random Beer"} image={"../images/random-beer.png"}/></Link>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6 py-2 px-2">
                    <Link className="link" to={'/new-beer-without-image'}><LinkComponent name={"New Beer without image"} image={"../images/new-beer.png"}/></Link>
                </div>               
            </div>       
      </div> 
      </DefaultLayout>    
    );
  }
}

export default Home;
