import React from 'react';
import PropTypes from 'prop-types';



function KegMenu(props) {
  const menuItems = {
    textAlign: 'left',
  }
  const kegStyles = {
    listStyleType: 'none',
  }

  return (
    <div style={menuItems}>
      <ul>
        <li style={kegStyles}>Name: {props.name}</li>
        <li style={kegStyles}>Brand: {props.brand}</li>
        <li style={kegStyles}>Price: ${props.price}</li>
        <li style={kegStyles}>Alcohol Content: {props.alcoholContent}%</li>
      </ul>
    </div>
  );
}

KegMenu.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
};

export default KegMenu;
