import React, { Component } from 'react'
import axios from 'axios';
import DefaultLayout from '../layout/Default';
import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
    constructor(props){
        super(props);
        this.state = {
            allBeers: [],
            error: null
        }
    }
   
    getAllBeers() {
      axios.get(`https://ih-beers-api.herokuapp.com/beers`)
        .then(response => {
            this.setState({
                allBeers: response.data
            })
        })
    }
   
    componentDidMount() {
      this.getAllBeers();
    }

    render() {
        return (
            <DefaultLayout>
            <div className="card-columns">
                

                        {
                            this.state.allBeers.map(beer => {
                                return (
                                <div key={beer._id}>
                                    <Link to={`/beers/${beer._id}`}>
                                    {/* <div className="col mb-4"> */}
                    <div className="card">
                                        <img src={beer.image_url} alt={beer.name}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{beer.name}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">{beer.tagline}</h6>
                                            <div class="card-footer">
                                                <small class="text-muted">{beer.contributed_by}</small>
                                            </div>
                                        </div>
                                        </div>
                {/* </div> */}
                                    </Link>
                                </div>
                                )})
                            }

            </div>
</DefaultLayout>
        )
    }
}
