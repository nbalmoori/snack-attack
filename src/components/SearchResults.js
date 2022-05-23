import React, {Component} from 'react';
import '../styling/SearchResults.css'

class SearchResults extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: ""
    }
  }

  componentDidMount = () => {
    const data = {
      prompt: 
        `Suggest three types of snacks to eat based on taste category.

        Taste: Sweet
        Snack: Candy, Cookies, Cake
        Taste: Salty
        Snack: Chips, Popcorn, Beef Jerky
        Taste: ${this.props.userSearch}
        Snack:`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statustext)
      } else {
        return response.json()
      }
    })
    .then(data => data.choices[0].text)
    .then(data => {
      this.setState({searchResults: data})
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  render = () => {
    return (
      <section className='searchResults'>
        <h1>{this.state.searchResults}</h1>
      </section>
    )
  }
}

export default SearchResults;