import React from 'react';
import PropTypes from 'prop-types';


function KegMenu(props) {


  return (
    <div>
      <h2>Our Selection</h2>
        <p>Name {props.name}<p>
        <p>Brand {props.brand}<p>
        <p>Price ${props.price}<p>
        <p>Alcohol Content {props.alcoholContent}%<p>
    </div>
  );
}

KegMenu.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
};

export default KegMenu;
