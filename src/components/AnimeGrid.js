const React = require('react');
const AnimeCard = require('./AnimeCard'); // ✅ Removed .default
require('../styles/AnimeGrid.css');

function AnimeGrid({ animes, searchQuery }) {
  const filteredAnimes = animes.filter(anime =>
    anime.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return React.createElement(
    'div',
    { className: 'anime-grid' },
    React.createElement(
      'h2',
      { className: 'grid-title' },
      searchQuery ? `Search Results: ${filteredAnimes.length}` : 'Featured Anime'
    ),
    React.createElement(
      'div',
      { className: 'grid-container' },
      filteredAnimes.map((anime) =>
        React.createElement(
          'div',
          { key: anime.name, className: 'grid-item' },
          React.createElement(AnimeCard, { anime: anime }) // ✅ Works correctly now
        )
      )
    )
  );
}

module.exports = AnimeGrid; // ✅ Correct export
