import React from 'react';
import { Link } from 'react-router-dom';
import tapperlogo from '../assets/images/tapper-logo.jpg';


function Header() {
  const bannerStyle = {
    width: '80%'
  }
  return (
    <div>
      <img style={bannerStyle} src={tapperlogo} />
      <hr/>
      <Link to='/'>Home</Link> | <Link to='/newkeg'>Add New Keg</Link> | <Link to='/staff'>Staff</Link>
    </div>
  );
}

export default Header;
