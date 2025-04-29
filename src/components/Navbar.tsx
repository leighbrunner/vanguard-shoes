import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              <span className="brand-name">Vanguard</span>
              <span className="brand-badge">50th</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="navbar-menu desktop">
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
            <Link to="/shoes" className={isActive('/shoes')}>
              Anniversary Shoes
            </Link>
            <Link to="/etf" className={isActive('/etf')}>
              Crypto ETF
            </Link>
            <Link to="/about" className={isActive('/about')}>
              About
            </Link>
            <Link to="/admin/add-shoe" className={isActive('/admin/add-shoe')}>
              Admin
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="navbar-toggle">
            <button
              onClick={toggleMenu}
              className="toggle-button"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-menu mobile ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={isActive('/')}
          >
            Home
          </Link>
          <Link
            to="/shoes"
            className={isActive('/shoes')}
          >
            Anniversary Shoes
          </Link>
          <Link
            to="/etf"
            className={isActive('/etf')}
          >
            Crypto ETF
          </Link>
          <Link
            to="/about"
            className={isActive('/about')}
          >
            About
          </Link>
          <Link
            to="/admin/add-shoe"
            className={isActive('/admin/add-shoe')}
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 