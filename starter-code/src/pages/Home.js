import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./home.css";


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container text-left home-page">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 d-flex justify-content-center offset-lg-2">
                            <Link to="/beers" class="link-box">
                                <div>
                                    <img src="images/beers.png" alt="" className="home-image"/>
                                    <h3>All Beers</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi, quae consequuntur voluptatum perspiciatis inventore odio nulla! Error nisi perspiciatis ipsa voluptas? Laborum error ipsam voluptatibus corporis ipsum voluptas fugiat.</p>
                                </div>  
                            </Link>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 d-flex justify-content-center offset-lg-2">
                            <Link to="/random-beer" class="link-box">
                                <div>
                                    <img src="images/random-beer.png" alt="" className="home-image"/>
                                    <h3>Random Beer</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi, quae consequuntur voluptatum perspiciatis inventore odio nulla! Error nisi perspiciatis ipsa voluptas? Laborum error ipsam voluptatibus corporis ipsum voluptas fugiat.</p>
                                </div>  
                            </Link>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 d-flex justify-content-center offset-lg-2">
                            <Link to="/new-beer" class="link-box">
                                <div>
                                    <img src="images/new-beer.png" alt="" className="home-image"/>
                                    <h3>New Beer</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi, quae consequuntur voluptatum perspiciatis inventore odio nulla! Error nisi perspiciatis ipsa voluptas? Laborum error ipsam voluptatibus corporis ipsum voluptas fugiat.</p>
                                </div>  
                            </Link>
                        </div>
                    </div>
                </div>
            </div>      
        )
    }
}
