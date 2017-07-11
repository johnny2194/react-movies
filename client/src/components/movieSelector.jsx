import React from 'react'

class MovieSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {search: ""}

  }

  handleChange(event) {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search for actor" onChange={this.handleChange.bind(this)}></input>
      </form>
    )
  }
}

export default MovieSelector
