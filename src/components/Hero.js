const React = require('react');
const { useState, useEffect } = require('react');
require('../styles/Hero.css');

const images = {
  desktop: [
    'https://4kwallpapers.com/images/walls/thumbs_3t/21322.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/21360.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/21313.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/21091.png',
    'https://4kwallpapers.com/images/walls/thumbs_2t/20445.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/20184.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/20236.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/20312.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/20233.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_2t/18712.jpg'
  ],
  mobile: [
    'https://wallpapers.com/images/high/5-centimeters-per-second-4k-anime-phone-rmjjqkqzx6krh939.webp',
    'https://wallpapers.com/images/high/naruto-shippuden-4k-anime-phone-hyvh21t6965i7w99.webp',
    'https://wallpapers.com/images/high/ken-kaneki-4k-anime-phone-0oi2a391lds2pu0z.webp',
    'https://wallpapers.com/images/high/demon-slayer-4k-anime-phone-cli2plny07hbwnsa.webp',
    'https://wallpapers.com/images/high/demon-slayer-4k-anime-phone-xrj4dxrkgvp6h6f3.webp',
    'https://wallpapers.com/images/high/4k-anime-iphone-red-eyes-battle-yuqte4gg6lnnq42k.webp',
    'https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038203.jpg?ga=GA1.1.1761988329.1739633279&semt=ais_hybrid',
    ''
  ]
};

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.desktop.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return React.createElement(
    'div',
    { className: 'hero-container' },
    React.createElement('img', {
      src: isMobile ? images.mobile[currentImage] : images.desktop[currentImage],
      alt: 'Anime Background',
      className: 'hero-background'
    }),
    React.createElement('div', { className: 'hero-overlay' }),
    React.createElement(
      'div',
      { className: 'hero-content' },
      React.createElement('h1', { className: 'hero-title' }, 'Welcome to AnimeStream'),
      React.createElement(
        'p',
        { className: 'hero-description' },
        'Discover the best anime series and movies, all in one place.'
      )
    )
  );
}

module.exports = Hero;
