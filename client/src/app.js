import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './components/movieContainer'

window.addEventListener('load', function () {
  ReactDOM.render(
    <MovieContainer />,
    document.getElementById('app')
  );
});
