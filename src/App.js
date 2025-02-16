const React = require('react');
const { useState } = require('react');
const { BrowserRouter, Routes, Route } = require('react-router-dom');

const Hero = require('./components/Hero');
const AnimeGrid = require('./components/AnimeGrid');
const MoviePlayer = require('./components/MoviePlayer');
const SeriesPlayer = require('./components/SeriesPlayer');

const { animeData } = require('./data/animeData');

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      'div',
      { className: 'min-h-screen bg-gray-900' },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: '/',
          element: React.createElement(
            React.Fragment,
            null,
            React.createElement(Hero, null),
            React.createElement(AnimeGrid, { animes: animeData.anime, searchQuery: searchQuery })
          ),
        }),
        React.createElement(Route, { path: '/movie/:name', element: React.createElement(MoviePlayer, null) }),
        React.createElement(Route, { path: '/series/:name', element: React.createElement(SeriesPlayer, null) })
      )
    )
  );
}

module.exports = App;
