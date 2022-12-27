import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">Book Tracker</h1>
      <nav className="Header-nav">
        <ul className="Header-nav-list">
          <li className="Header-nav-item"><a href="/">홈</a></li>
          <li className="Header-nav-item"><a href="/search">검색</a></li>
          <li className="Header-nav-item"><a href="/info">내정보</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
