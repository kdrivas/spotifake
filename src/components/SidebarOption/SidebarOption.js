import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css';

const SidebarOption = ({title, Icon}) => {
  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebar-option__icon"/>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

SidebarOption.propTypes = {
  
};

export default SidebarOption;