import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2 text-left">
                        <img className="img-fluid" src="../images/beers.png" alt="beers"/>
                        <h1><Link className="text-body" to={"/beers"}>All Beers</Link></h1>
                        <p className="text-black-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea debitis itaque velit impedit quae nulla assumenda. Ex, aliquam laboriosam! Consequuntur expedita quod corporis cum adipisci odit numquam architecto commodi nobis!</p>
                    </div>
                    <div className="col-12 col-lg-8 offset-lg-2 text-left">   
                        <img className="img-fluid" src="../images/random-beer.png" alt="new bees"/>
                        <h1><Link className="text-body" to={"/beers/random"}>Random Beer</Link></h1>
                        <p className="text-black-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolorem ad in libero quia iure voluptate aut enim? Soluta aperiam nostrum ipsam in, dolores inventore id fugit! Consequuntur, repudiandae dignissimos.</p>
                    </div>
                    <div className="col-12 col-lg-8 offset-lg-2 text-left">   
                        <img className="img-fluid" src="../images/new-beer.png" alt="random beer"/>
                        <h1><Link className="text-body" to={"/beers/new"}>New Beer</Link></h1>
                        <p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque sapiente odio? Enim provident omnis praesentium repellat minus doloremque vero debitis officia placeat et. Quasi commodi est assumenda asperiores dicta!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;