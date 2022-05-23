import React, { Component } from 'react';
import '../styling/App.css';
import Nav from './Nav'
import SearchResults from './SearchResults'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userSearch: ""
    }
  }

  displaySearchResults = (search) => {
    this.setState({userSearch: search})
  }

  render = () => {
    return (
      <main>
        <header>Snack Attack!</header>
        <Nav displaySearchResults={this.displaySearchResults}/>
        {this.state.userSearch && <SearchResults userSearch={this.state.userSearch}/>}
      </main>
    )
  }
}

export default App;