import React from 'react'
import MovieSelector from './movieSelector'
import MovieDetails from './movieDetails'

class MovieContainer extends React.Component {

  render() {
    return (
    <div>
      <h1>Sup bra</h1>
      <MovieSelector />
      <MovieDetails />
    </div>
    )
  }


}

export default MovieContainer
