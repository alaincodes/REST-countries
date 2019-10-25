import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar({ themeState }) {
  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <h1 className='navbar-title'>Where in the world ?</h1>
      </Link>
      <button onClick={() => themeState.toggle()} className='navbar-btn'>
        {themeState.dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
