const React = require('react');
const { Play } = require('lucide-react');
const { Link } = require('react-router-dom');
const { animeData } = require('../data/animeData');
require('../styles/AnimeCard.css');

function AnimeCard({ anime }) {
  // Check if the anime has seasons array and it's not empty
  const type = anime.seasons && anime.seasons.length > 0 ? 'series' : 'movie';
  const path = `/${type}/${anime.name.toLowerCase().replace(/\s+/g, '-')}`;

  return React.createElement(
    'div',
    { className: 'anime-card' },
    React.createElement(
      'div',
      { className: 'image-container' },
      React.createElement('img', {
        src: anime.image,
        alt: anime.name,
        className: 'anime-image',
      }),
      React.createElement('div', { className: 'image-overlay' })
    ),
    React.createElement(
      'div',
      { className: 'content-container' },
      React.createElement('h3', { className: 'anime-title' }, anime.name),
      React.createElement(
        Link,
        { to: path, className: `play-button ${type}` },
        React.createElement(Play, { size: 18 }),
        type === 'movie' ? 'Watch Movie' : 'Watch Series'
      )
    )
  );
}

module.exports = AnimeCard;
