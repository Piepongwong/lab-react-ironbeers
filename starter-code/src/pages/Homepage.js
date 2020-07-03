import React from 'react';
import { Link } from "react-router-dom";
import "./styling/Homepage.css"

class Homepage extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                < Link to={`/beers`}>
                    <div className="pages">
                        <div>
                            <img src="/images/beers.png" alt="beertap"></img>
                        </div>
                        <div className="page-detail">
                            <h2>All Beers</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam est, pretium et rhoncus a, faucibus vitae sapien. Cras sed libero egestas felis sodales molestie quis a tellus. Fusce quis fringilla nisi, eu eleifend ex. Sed tempus gravida finibus. Ut quam turpis, cursus ut odio eu, aliquet laoreet tortor. Donec ac odio magna. Fusce et nisi id enim ornare interdum ac et ipsum.
                            </p>
                        </div>
                    </div>
                </Link>
                </div>
                <div>
                < Link to={`/random-beer`}>
                    <div className="pages">
                        <div>
                            <img src="/images/random-beer.png" alt="tapdetail"></img>
                        </div>
                        <div className="page-detail">
                            <h2>Random Beer</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam est, pretium et rhoncus a, faucibus vitae sapien. Cras sed libero egestas felis sodales molestie quis a tellus. Fusce quis fringilla nisi, eu eleifend ex. Sed tempus gravida finibus. Ut quam turpis, cursus ut odio eu, aliquet laoreet tortor. Donec ac odio magna. Fusce et nisi id enim ornare interdum ac et ipsum.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                < Link to={`/new-beer`}>
                    <div className="pages">
                        <div>
                            <img src="/images/new-beer.png" alt="beer"></img>
                        </div>
                        <div className="page-detail">
                            <h2>New Beer</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam est, pretium et rhoncus a, faucibus vitae sapien. Cras sed libero egestas felis sodales molestie quis a tellus. Fusce quis fringilla nisi, eu eleifend ex. Sed tempus gravida finibus. Ut quam turpis, cursus ut odio eu, aliquet laoreet tortor. Donec ac odio magna. Fusce et nisi id enim ornare interdum ac et ipsum.
                            </p>
                        </div>
                    </div>
                </Link>
            </div> 
            </div>
        )
    }
}

export default Homepage;