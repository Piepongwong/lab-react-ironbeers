import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="container">
            <div className="row justify-content-center py-2">
                <div className="col-2 left">
                    <img className="img-fluid" src={props.image_url} alt={props.name}/>
                </div>
                <div className="col-8 right">
                    <h3>{props.name}</h3>
                    <p className="tagline">{props.tagline}</p>
                    <p><small><b>created By </b></small>{props.contributed_by}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Card;