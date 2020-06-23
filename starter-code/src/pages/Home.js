import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Link to="/beers">
                            <div className="col-7">
                                <img src="images/beers.png" alt=""/>
                                <h3>All Beers</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi, quae consequuntur voluptatum perspiciatis inventore odio nulla! Error nisi perspiciatis ipsa voluptas? Laborum error ipsam voluptatibus corporis ipsum voluptas fugiat.</p>
                            </div>  
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/random-beer">
                            <div className="col-7">
                                <img src="images/random-beer.png" alt=""/>
                                <h3>Random Beer</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi, quae consequuntur voluptatum perspiciatis inventore odio nulla! Error nisi perspiciatis ipsa voluptas? Laborum error ipsam voluptatibus corporis ipsum voluptas fugiat.</p>
                            </div>  
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/new-beer">
                            <div className="col-7">
                                <img src="images/new-beer.png" alt=""/>
                                <h3>New Beer</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi, quae consequuntur voluptatum perspiciatis inventore odio nulla! Error nisi perspiciatis ipsa voluptas? Laborum error ipsam voluptatibus corporis ipsum voluptas fugiat.</p>
                            </div>  
                        </Link>
                    </div>

                </div>
            </div>      
        )
    }
}
