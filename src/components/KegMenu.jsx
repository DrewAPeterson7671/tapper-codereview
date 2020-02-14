import React from 'react';
import PropTypes from 'prop-types';



function KegMenu(props) {


  return (
    <div>
      <h2>Our Selection</h2>
        <ul>
          <li>Name {props.name}</li>
          <li>Brand {props.brand}</li>
          <li>Price ${props.price}</li>
          <li>Alcohol Content {props.alcoholContent}%</li>
        </ul>
    </div>
  );
}

KegMenu.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
};

export default KegMenu;
