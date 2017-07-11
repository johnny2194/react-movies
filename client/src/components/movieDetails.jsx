import React from 'react'

class MovieDetails extends React.Component {

  render() {

    const movies = this.props.movies.map(function (movie) {
      const cast = movie.show_cast.split(", ");
      cast.map(function (actor) {
        console.log(actor);
        return <p>{actor}</p>
      })
      return (
        <div>
          <h4>Title: {movie.show_title}</h4>
          <p>Director: {movie.director}</p>
          <div>{cast}</div>
          <br/>
        </div>
      )
    });
    if (this.props.message) {
      return <h3>{this.props.message}</h3>
    } else {
      return (
        <div>
          {movies}
        </div>
      )
    }

  }
}

export default MovieDetails
