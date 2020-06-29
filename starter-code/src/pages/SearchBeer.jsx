import React, { Component } from "react";

class SearchBeer extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" name="search" onChange={e => this.props.searching(e.target.value)} />
      </div>
    )
  }
}

export default SearchBeer;