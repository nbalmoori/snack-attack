import React from 'react';
import '../styling/SearchResults.css'

const SearchResults = ({userSearch}) => {
  return(
    <section className='searchResults'>
        <h1>{userSearch}</h1>
    </section>
  )
}

export default SearchResults;