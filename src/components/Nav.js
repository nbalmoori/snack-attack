import React, {Component} from 'react';
import '../styling/Nav.css';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    }
  }

  handleChange = (event) => {
    this.setState({userInput: event.target.value})
  };

  submitSearch = (event) => {
    event.preventDefault()
    const newSearch = this.state.userInput
    this.props.displaySearchResults(newSearch)
  };

  render = () => {
    return (
      <form>
        <input
          className='searchBar'
          type='text'
          placeholder='search for something'
          name='search'
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitSearch(event)}>Search</button>
      </form>
    )
  }
}

 export default Nav;