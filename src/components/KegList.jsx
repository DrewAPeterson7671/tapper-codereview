import React from 'react';
import KegMenu from './KegMenu';


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
    brand: 'Putz Beer,
    price: '5.00',
    alcoholContent: '8.3',
  },
  {
    name: 'Madman',
    brand: 'Pandering Image',
    price: '5.00',
    alcoholContent: '8.3',
  },
  {
    name: 'Getter',
    brand: 'Pandering Image'',
    price: '5.00',
    alcoholContent: '8.3',
  },
  {
    name: 'Cool Drinking, Not Trailer Park',
    brand: 'Vance Maximus',
    price: '5.00',
    alcoholContent: '8.3',
  },
  {
    name: 'Half Croc, All Redundant',
    brand: 'Crocubot',
    price: '5.00',
    alcoholContent: '8.3',
  },
];

function KegList() {
  return (
    <div>
      {kegList.map((keg, index) => (
        <KegMenu
          name={KegMenu.name}
          brand={KegMenu.brand}
          price={KegMenu.price}
          alcoholContent={KegMenu.alcoholContent}
          key={index}
        />
      ))}
    </div>
  );
}

export default KegList;
