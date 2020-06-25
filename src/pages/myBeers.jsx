import React, { Component } from 'react'

class myBeers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: {}
    }
  }

  componentDidMount() {
    axios.get('https://ih-beers-api.herokuapp.com/user/my-beers')
    .then(response => {
        this.setState({
            beers: response.data
        })
    })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default myBeers
