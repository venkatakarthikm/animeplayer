const React = require('react');
const { useState } = require('react');
const { useParams } = require('react-router-dom');
const { animeData } = require('../data/animeData');
require('../styles/SeriesPlayer.css');

function SeriesPlayer() {
  const { name } = useParams();
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const anime = animeData.anime.find(
    (a) => a.name.toLowerCase().replace(/\s+/g, '-') === name
  );

  if (!anime || !anime.seasons.length) {
    return React.createElement('div', null, 'Series not found');
  }

  const season = anime.seasons.find((s) => s.season === selectedSeason);
  const episode = season?.episodes.find((e) => e.episode === selectedEpisode);

  return React.createElement(
    'div',
    { className: 'player-container' },
    React.createElement(
      'div',
      { className: 'controls-container' },
      React.createElement(
        'select',
        {
          value: selectedSeason,
          onChange: (e) => setSelectedSeason(Number(e.target.value)),
          className: 'select-control',
        },
        anime.seasons.map((s) =>
          React.createElement('option', { key: s.season, value: s.season }, `Season ${s.season}`)
        )
      ),
      React.createElement(
        'select',
        {
          value: selectedEpisode,
          onChange: (e) => setSelectedEpisode(Number(e.target.value)),
          className: 'select-control',
        },
        season?.episodes.map((e) =>
          React.createElement(
            'option',
            { key: e.episode, value: e.episode },
            `Episode ${e.episode}: ${e.title}`
          )
        )
      )
    ),
    episode &&
      React.createElement(
        'div',
        { className: 'video-container' },
        React.createElement('iframe', {
          src: episode.link,
          className: 'video-frame',
          allowFullScreen: true,
          title: `${anime.name} S${selectedSeason}E${selectedEpisode}`,
          scrolling: 'no' 
        })
      ),
    React.createElement(
      'div',
      { className: 'episode-info' },
      React.createElement('h2', { className: 'episode-title' }, episode?.title),
      React.createElement(
        'p',
        { className: 'episode-details' },
        `Season ${selectedSeason} Episode ${selectedEpisode}`
      )
    )
  );
}

module.exports = SeriesPlayer;
