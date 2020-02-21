import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

const kegList = [
  {
    name: 'Hell Yes',
    brand: 'Maniac Brewery',
    price: '10.00',
    alcoholContent: '8.3',
  },
  {
    name: 'Hell Maybe',
    brand: 'Maniac Brewery',
    price: '8.00',
    alcoholContent: '6.5',
  },
  {
    name: 'Hell No',
    brand: 'Maniac Brewery',
    price: '7.50',
    alcoholContent: '5.1',
  },
  {
    name: 'Hella Weak',
    brand: 'Putz Beer',
    price: '5.00',
    alcoholContent: '3.1',
  },
  {
    name: 'Heck Whatever',
    brand: 'Putz Beer',
    price: '5.35',
    alcoholContent: '7.3',
  },
  {
    name: 'Madman',
    brand: 'Pandering Image',
    price: '6.70',
    alcoholContent: '6.1',
  },
  {
    name: 'Getter',
    brand: 'Pandering Image',
    price: '5.03',
    alcoholContent: '5.5',
  },
  {
    name: 'Cool Drinking, Not Trailer Park',
    brand: 'Vance Maximus',
    price: '6.11',
    alcoholContent: '5.3',
  },
  {
    name: 'Half Croc, Half Robot. All Redundant',
    brand: 'Crocubot',
    price: '4.07',
    alcoholContent: '4.3',
  },
];

function KegList(props){

  return (
    <div>
      <h2>Our Selection</h2>
      {Object.keys(props.kegList).map(function(kegId) {
        let ticket=props.kegList[kegId];
        return <Keg
          name={kegMenu.name}
          brand={kegMenu.brand}
          price={kegMenu.price}
          alcoholContent={kegMenu.alcoholContent}
          key={index}/>
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onNewKegAddition: PropTypes.func
};

export default KegList;
