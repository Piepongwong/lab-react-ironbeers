import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Default from '../layouts/Default';

export default class Home extends Component {
    render() {
        return (
            <Default>
                <h1>Ironbeers</h1>
                    <Link to="/beers">
                        <img src="../images/beers.png" alt="All beers"/>
                        <h2>All beers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti cum possimus explicabo enim magnam mollitia ex. Magni, rerum atque debitis ea sint quidem, quia officia nobis laboriosam minima nisi!</p>
                    </Link>
                    <Link to="/random">
                        <img src="../images/random-beer.png" alt="Random beer"/>
                        <h2>Random beer</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa unde, quidem cupiditate delectus expedita aliquid quo hic nihil laudantium minima a enim possimus, molestias fuga? Harum veniam aspernatur quo consequuntur?</p>
                    </Link>
                    <Link to="/new-beer">
                        <img src="../images/new-beer.png" alt="New beer"/>
                        <h2>New beer</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perspiciatis deleniti vitae fugit ut quam velit. Sint hic maxime et accusamus tempore, repellat reprehenderit id reiciendis voluptates ipsa. Atque, ducimus?</p>
                    </Link>
                    <Link to="/new-beer-img">
                        <h2>New beer with image</h2>
                    </Link>
            </Default>
        )
    }
}
