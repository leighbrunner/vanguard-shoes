import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, would implement search functionality
    console.log('Search for:', searchQuery);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-brand">
              <Link to="/" className="brand-link">
                <span className="brand-name">HellWalkers</span>
                <span className="brand-badge">666</span>
              </Link>
            </div>
            
            {/* Search bar */}
            <form className="search-bar" onSubmit={handleSearch}>
              <input 
                type="text" 
                className="search-input"
                placeholder="Search the eternal flames..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <span role="img" aria-label="search">🔥</span>
              </button>
            </form>
            
            {/* Desktop menu */}
            <div className="navbar-menu desktop">
              <Link to="/" className={`fire-text ${isActive('/')}`}>
                <div>
                  <small>Join Us</small>
                  <div><strong>Sinners</strong></div>
                </div>
              </Link>
              <Link to="/shoes" className={`fire-text ${isActive('/shoes')}`}>
                <div>
                  <small>Damnation</small>
                  <div><strong>& Torment</strong></div>
                </div>
              </Link>
              <Link to="/albert" className={`fire-text ${isActive('/albert')}`}>
                <div>
                  <small>The</small>
                  <div><strong>Legend</strong></div>
                </div>
              </Link>
              <Link to="/admin/add-shoe" className={`fire-text ${isActive('/admin/add-shoe')}`}>
                <div>
                  <small>Hellish</small>
                  <div><strong>Creations</strong></div>
                </div>
              </Link>
              <Link to="/cart" className={`cart ${isActive('/cart')}`}>
                <span className="cart-count">666</span>
                <span>Soul Collector</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="navbar-toggle">
              <button
                onClick={toggleMenu}
                className="toggle-button"
              >
                <span className="sr-only">Open hellgate</span>
                {isMenuOpen ? 'Close' : '🔥 Menu'}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`navbar-menu mobile ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={isActive('/')}>
              Abandon Hope
            </Link>
            <Link to="/shoes" className={isActive('/shoes')}>
              Hellish Footwear
            </Link>
            <Link to="/etf" className={isActive('/etf')}>
              Devil's Bargains
            </Link>
            <Link to="/about" className={isActive('/about')}>
              Our Demonic History
            </Link>
            <Link to="/albert" className={isActive('/albert')}>
              Albert the Legend
            </Link>
            <Link to="/admin/add-shoe" className={isActive('/admin/add-shoe')}>
              Create Abominations
            </Link>
            <Link to="/cart" className={isActive('/cart')}>
              Soul Collector (666)
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Secondary navigation */}
      <div className="sub-nav">
        <div className="container">
          <Link to="/">
            <span className="sub-nav-icon">⛧</span> All Torments
          </Link>
          <Link to="/shoes">Today's Sacrifices</Link>
          <Link to="/shoes">Eternal Damnation</Link>
          <Link to="/albert">Albert's Domain</Link>
          <Link to="/shoes">Hellfire Cards</Link>
          <Link to="/shoes">Book of the Beast</Link>
          <Link to="/shoes">Soul Exchange</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar; 