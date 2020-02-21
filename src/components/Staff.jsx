import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Staff(props) {

}
  return (
    <div>
      <h2>Staff Page</p>
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Staff.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
};

export default Staff;
