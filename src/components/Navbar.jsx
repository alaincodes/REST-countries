import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar-container'>
      <h1 className='navbar-title'>Where in the world ?</h1>
      <button className='navbar-btn'>Dark Mode</button>
    </nav>
  );
}
