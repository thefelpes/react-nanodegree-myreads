import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import PropTypes from 'prop-types'

class Book extends Component {
  handleChange = event => {
    event.preventDefault()
    switch (event.target.value) {
      case 'currentlyReading':
        this.props.addTocurrentlyReading(this.props.book)
        break
      case 'wantToRead':
        this.props.addTowantToRead(this.props.book)
        break
      case 'read':
        this.props.addToRead(this.props.book)
        break
      default:
    }
  }

  render() {
    const { book } = this.props
    return (
      <li>
        <Paper>
          <header>
            <h2>{book.title}</h2>
            <DropDownMenu value={this.props.list} onChange={this.handleChange}>
              <MenuItem value="none" primaryText="None" />
              <MenuItem value="currentlyReading" primaryText="Currently reading" />
              <MenuItem value="wantToRead" primaryText="Want to read" />
              <MenuItem value="read" primaryText="Read" />
            </DropDownMenu>
          </header>
        </Paper>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  addTocurrentlyReading: PropTypes.func.isRequired,
  addTowantToRead: PropTypes.func.isRequired,
  addToRead: PropTypes.func.isRequired
}

export default Book
