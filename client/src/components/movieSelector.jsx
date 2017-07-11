import React from 'react'

class MovieSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {search: ""}

  }

  handleChange(event) {
    this.setState({search: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSearch(this.state.search);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Search for actor" onChange={this.handleChange.bind(this)}></input>
      </form>
    )
  }
}

export default MovieSelector
