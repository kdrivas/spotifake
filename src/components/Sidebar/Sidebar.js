import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.css';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
    </div>
  );
};

Sidebar.propTypes = {
  
};

export default Sidebar;