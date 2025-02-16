const React = require('react');
const { useParams } = require('react-router-dom');
const { animeData } = require('../data/animeData');
require('../styles/MoviePlayer.css');

function MoviePlayer() {
  const { name } = useParams();
  const anime = animeData.anime.find(
    (a) => a.name.toLowerCase().replace(/\s+/g, '-') === name
  );

  if (!anime || !anime.movies.length) {
    return React.createElement('div', null, 'Movie not found');
  }

  const movie = anime.movies[0];

  return React.createElement(
    'div',
    { className: 'player-container' },
    React.createElement('h1', { className: 'movie-title' }, movie.title),
    React.createElement(
      'div',
      { className: 'video-container' },
      React.createElement('iframe', {
        src: movie.link,
        className: 'video-frame',
        allowFullScreen: true,
        title: movie.title,
        scrolling: 'no' // ✅ Added scrolling="no"
      })
    ),
    React.createElement(
      'div',
      { className: 'info-container' },
      React.createElement('h2', { className: 'info-title' }, `About ${anime.name}`),
      React.createElement(
        'p',
        { className: 'info-description' },
        `Experience the epic story of ${anime.name} in this feature-length film.
        Immerse yourself in stunning animation and unforgettable moments.`
      )
    )
  );
}

module.exports = MoviePlayer;
