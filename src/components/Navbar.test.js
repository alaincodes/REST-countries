import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

if (
  // eslint-disable-next-line no-constant-condition
  ('renders without crashing',
  () => {
    const nav = document.createElement('nav');
    ReactDOM.render(<Navbar />, nav);
    ReactDOM.unmountComponentAtNode(nav);
  })
);
