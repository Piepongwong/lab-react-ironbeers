import React, { Component } from 'react'
import './Beer.scss'
import { Link } from 'react-router-dom';

class Beer extends Component {
  render() {
    return (
      <Link to={`/beers/${this.props.id}`} className="Beer">
        <div className="image-container">
          <img src={`${this.props.image}`} alt={`${this.props.name}`} srcSet={`${this.props.image}`}/>
        </div>
        <div className="beer-content">
          <h3>{this.props.name}</h3>
          <h4>{this.props.tagline}</h4>
          <p><strong>Created by: </strong> {this.props.contributed_by}</p>
        </div>
      </Link>
    )
  }
}

export default Beer
