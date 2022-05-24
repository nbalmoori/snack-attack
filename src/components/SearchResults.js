import React, {Component} from 'react';
import '../styling/SearchResults.css'

const SearchResults = ({searchResults, clearResults}) => {
  return (
    <section className='searchResults'>
      <h1>{searchResults}</h1>
      <button onClick={() => clearResults()}>Clear Search</button>
    </section>
  ) 
}

export default SearchResults;