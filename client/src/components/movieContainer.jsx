import React from 'react'
import MovieSelector from './movieSelector'
import MovieDetails from './movieDetails'

class MovieContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movieList: [],
      message: ""
    }

  }

  handleSearch(searchRequest) {
    const request = new XMLHttpRequest();
    request.open("GET", "http://netflixroulette.net/api/api.php?actor=" + searchRequest)
    request.onload = function() {
      const data = JSON.parse(request.responseText);
      if (request.status == 400){
        this.setState({message: data.message})
      }
      this.setState({movieList: data})
    }.bind(this);
    request.send()
  }

  render() {
    return (
    <div>
      <h1>Sup bra</h1>
      <MovieSelector onSearch={this.handleSearch.bind(this)}/>
      <MovieDetails message={this.state.message} movies={this.state.movieList}/>
    </div>
    )
  }


}

export default MovieContainer
