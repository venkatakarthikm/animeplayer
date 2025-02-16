import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">AnimeStream</div>
        
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar