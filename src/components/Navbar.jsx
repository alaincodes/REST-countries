import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <h1 className='navbar-title'>Where in the world ?</h1>
      </Link>
      <button disabled className='navbar-btn'>
        Dark Mode
      </button>
    </nav>
  );
}
