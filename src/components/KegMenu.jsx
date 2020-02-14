import React from 'react';
import PropTypes from 'prop-types';
import kegList from './KegList';


function KegMenu(props) {


  return (
    <div>
      <h2>Our Selection</h2>
      {kegList.map((keg, index) => (
        <KegMenu key={index}>
          <p>Name {keg.name}</p>
          <p>Brand {keg.brand}</p>
          <p>Price ${keg.price}</p>
          <p>Alcohol Content {keg.name}%</p>

        </KegMenu>
      ))}
    </div>
  );
}

export default KegMenu;
