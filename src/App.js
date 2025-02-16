const React = require('react');
const { useState , useEffect} = require('react');
const { BrowserRouter, Routes, Route } = require('react-router-dom');

const Hero = require('./components/Hero');
const AnimeGrid = require('./components/AnimeGrid');
const MoviePlayer = require('./components/MoviePlayer');
const SeriesPlayer = require('./components/SeriesPlayer');

const { animeData } = require('./data/animeData');

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Add scroll event handler
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    // Prevent right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable key combinations for inspecting
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'i' || e.key === 'I')) || e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    handleScroll(); // Initial check to apply visible class to sections already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
