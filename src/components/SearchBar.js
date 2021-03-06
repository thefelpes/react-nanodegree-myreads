import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Debounce } from 'react-throttle'
import css from './SearchBar.css'

class SearchBar extends Component {
  handleChange = event => {
    this.props.searchBooks(event.target.value)
  }

  render() {
    return (
      <Paper style={{
        margin: 20,
        width: '100%',
        height: '35px',
        textAlign: 'center',
        display: 'inline-block',
        marginTop: '1.7em',
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0
      }} zDepth={1}>
        <Debounce time="100" handler="onChange">
          <input
            id="search-input"
            className={css.input}
            type="search"
            name="search"
            placeholder="Search a book..."
            onChange={this.handleChange} />
        </Debounce>
      </Paper>
    )
  }
}

export default SearchBar
