import React from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Header.css';

function Header(props) {
  const user = null;
  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlined/>
      </div>
      <div className="header__rigth">
        <Avatar/>
        <div>{user?.display_name}</div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header

