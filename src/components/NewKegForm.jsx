import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;


function handleNewKegSubmission(event) {
  event.preventDefault();
  props.onNewKegAddition({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value});
  _name.value = '';
  _brand.value = '';
  _price.value = '';
  _alcoholContent.value = '';
}
  return(
    <div>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'/>
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
          ref={(input) => {_brand = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='alchololContent'
          placeholder='Alcholol Content'/>
          ref={(input) => {_alcoholContent = input;}}/>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegAddition: PropTypes.func
}

export default NewKegForm;
