import React from 'react';
import PropTypes from 'prop-types';



function KegMenu(props) {
  const highPrice = {
    color: 'red'
  }

  return (
    <div>
      <ul>
        <li>Name: {props.name}</li>
        <li>Brand: {props.brand}</li>
        <li>Price: ${props.price}</li>
        <li>Alcohol Content: {props.alcoholContent}%</li>
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
