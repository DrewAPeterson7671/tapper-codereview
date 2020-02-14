import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <h1>Tapper</h1>
      <Link to="/">Home</Link> | <Link to="/NewKegForm">Add New Keg</Link>
    </div>  
  );
}

export default Header;
