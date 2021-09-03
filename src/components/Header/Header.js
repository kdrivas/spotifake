import React from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Header.css';

const CustomAvatar = withStyles((theme) => ({
  root: {
    width: 28,
    height: 28,
  },
}))(Avatar);

function Header(props) {
  const user = {};
  user['display_name'] = "dante rivas rojas";
  return (
    <div className="header">
      <div className="header__rigth">
        <CustomAvatar />
        <div className="header__user-name">{user?.display_name}</div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header

