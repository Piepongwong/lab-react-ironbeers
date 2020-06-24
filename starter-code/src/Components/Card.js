import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-2 left">
                    <img src={props.image_url} alt={props.name}/>
                </div>
                <div className="col-8 right">
                    <h3>{props.name}</h3>
                    <p className="tagline">{props.tagline}</p>
                    <p>{props.description}</p>
                    <p><span>First Brewed </span>{props.first_brewed}</p>
                    <p><span>Attenuation Level </span>{props.attenuation_level}</p>
                    <p><span>Contributed By </span>{props.contributed_by}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;