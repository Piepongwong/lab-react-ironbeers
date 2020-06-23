import React, { Component } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Home">
                <Link to='/beers'>
                    <img src="/images/beers.png" alt="" srcSet="/images/new-beer.png"/>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam repudiandae at facilis quo, recusandae veritatis corporis accusamus magni tempora minima vel odit, natus repellendus consectetur nisi excepturi, eius iste!</p>
                </Link>
                <Link to='/random-beer'>
                    <img src="/images/random-beer.png" alt="" srcSet="/images/random-beer.png"/>
                    <h2>Random Beers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus ad quos reiciendis excepturi maxime, exercitationem velit libero consequatur cum doloremque deserunt voluptatibus sed quas porro qui totam delectus nesciunt.</p>
                </Link>
                <Link to='/new-beer'>
                    <img src="/images/new-beer.png" alt="" srcSet="/images/new-beer.png"/>
                    <h2>New Beer</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus modi, dicta ipsa quidem doloribus iste amet qui, placeat incidunt nesciunt nulla laborum recusandae aut doloremque explicabo repudiandae, sint ullam.</p>
                </Link>
            </div>
        )
    }
}

export default Home
