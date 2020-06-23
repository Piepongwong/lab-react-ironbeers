import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

class NewBeer extends Component {
    render() {
        return(
            <div className="new-beer">
                <Navbar />
                <h1>New Beer</h1>
            </div>
        )
    }
}

export default NewBeer;