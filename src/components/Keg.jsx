import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const menuItems = {
    textAlign: 'left',
    fontWeight: 'bold',
    position: 'relative',
  }

  const kegContainers = {
    position: 'relative',
    display: 'inline',
    width: '200px',
    height: '200px',
    margin: '50px',
  }
  const kegStyles = {
    listStyleType: 'none',
  }



  return (
    <div style={menuItems}>
      <ul style={kegContainers}>
        <li style={kegStyles}>Name: {props.name}</li>
        <li style={kegStyles}>Brand: {props.brand}</li>
        <li style={kegStyles}>Price: ${props.price}</li>
        <li style={kegStyles}>Alcohol Content: {props.alcoholContent}%</li>
      </ul>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
};

export default Keg;
