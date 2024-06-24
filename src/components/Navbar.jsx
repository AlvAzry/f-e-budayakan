import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  // Check if token exists in localStorage
  const token = localStorage.getItem('token');

  const handleProfileClick = () => {
    navigate('/profil'); // Redirect to profile page
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect to Home page or login page as per your app logic
  };

  return (
    <nav>
      <div className="wrapper-navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-navbar" />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/beranda">Beranda</Link>
            </li>
            <li>
              <Link to="/tentang-kami">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/informasi">Informasi</Link>
            </li>
            <li>
              <Link to="/konsultasi">Konsultasi</Link>
            </li>
          </ul>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </form>
          {/* Conditional rendering based on token existence */}
          {token ? (
            <>
              <button className="profile-button" onClick={handleProfileClick}>
                {/* You can replace text with an icon or image */}
                <img src={logo} alt="Profile" className="logo-navbar" />
              </button>
              <button className="login-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="login-button">
                <Link to="/login">Masuk</Link>
              </button>
              {/* <button className="signup-button">
                <Link to="/signup">Daftar</Link>
              </button> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
