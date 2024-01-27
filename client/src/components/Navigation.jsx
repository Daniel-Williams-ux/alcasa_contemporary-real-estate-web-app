import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reserve">Reserve</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience-o2">Experience O2</Link></li>
      </ul>
    </nav>
  );
}
 export default Navigation;