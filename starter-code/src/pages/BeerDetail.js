import React from 'react';
import axios from "axios";
import "./styling/BeerDetail.css";

class BeerDetail extends React.Component {
    state = {
        aBeer: {}
    }
    componentDidMount() {
        axios
            .get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(response => {
                let beer = response.data
                this.setState({ aBeer: beer })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container beer-detail">
                <div className="beer-image">
                    <img src={this.state.aBeer.image_url} alt="beer"></img>
                </div>
                <div className="beer-title">
                    <h2>{this.state.aBeer.name}</h2>
                    <h3>{this.state.aBeer.attenuation_level}</h3>
                </div>
                <div className="beer-subtitle">
                    <h5>{this.state.aBeer.tagline}</h5>
                    <p><b>{this.state.aBeer.first_brewed}</b></p>
                </div>
                <div className="description">
                    <p>{this.state.aBeer.description}</p>
                </div>
                <div className="contributor">
                    <p><b>{this.state.aBeer.contributed_by}</b></p>
                </div>
            </div>
        )
    }
}

export default BeerDetail;


// render(){
//     return (
//       <div className="beerDetail">
//         <div className="beerDetail-header">
//           <Header />
//         </div>
//         <div className="beerDetail-card">
//           {!this.state.beer && <h1>loading...</h1>}
//           {this.state.beer && (
//             <img src={this.state.beer.image_url} alt="beer" />
//           )}
//           {this.state.beer && <h1>{this.state.beer.name}</h1>}
//           {this.state.beer && <h4>{this.state.beer.tagline}</h4>}
//           {this.state.beer && <p>{this.state.beer.first_brewed}</p>}
//           {this.state.beer && <p>{this.state.beer.attenuation_level}</p>}
//           {this.state.beer && <p>{this.state.beer.description}</p>}
//           {this.state.beer && <p>{this.state.beer.contributed_by}</p>}
//         </div>
//       </div>
//     );
//   }