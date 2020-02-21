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

  const kegInformation =
    <div style={menuItems}>
      <ul style={kegContainers}>
        <li style={kegStyles}>Name: {props.name}</li>
        <li style={kegStyles}>Brand: {props.brand}</li>
        <li style={kegStyles}>Price: ${props.price}</li>
        <li style={kegStyles}>Alcohol Content: {props.alcoholContent}%</li>
      </ul>
    </div>;
  if (props.currentRouterPath === '/staff'){
    return (
      <div>
        <p> go to keg.jsx and add quantity</p>
        <p> should show 124 pints, click reduces by 1</p>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}


Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  kegId: PropTypes.string.isRequired
};

export default Keg;
