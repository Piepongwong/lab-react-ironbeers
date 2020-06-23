import React from 'react';

const beerCard = (props) => {
    function firstBrewedDate(date){
        let dateFormat = new Date(date);
        let month = dateFormat.getMonth() + 1;
        if (month < 10)  month = '0' + month;
        let year = dateFormat.getFullYear();
        return `${month}/${year}`
    }

    return (
        <div className="beer-card container">
            <img className="img-fluid beer-image" src={props.image_url} alt={props.name}/>
            <div className="row">
                <div className="col-8">
                    <h2>{props.name}</h2>
                    <p>{props.tagline}</p>
                </div>
                <div className="col-4">
                    <p>{props.attenuation_level}</p>
                    { props.first_brewed && <p>{firstBrewedDate(props.first_brewed)}</p> }
                </div>
            </div>
            <p>{props.description}</p>
            <small>{props.contributed_by}</small>
        </div>
    )
};

export default beerCard;
