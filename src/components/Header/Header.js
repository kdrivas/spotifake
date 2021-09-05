import React from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';

const CustomAvatar = withStyles((theme) => ({
  root: {
    width: 28,
    height: 28,
  },
}))(Avatar);

function Header({
  info: { user }
}) {
  return (
    <div className="header">
      <div className="header__rigth">
        <CustomAvatar alt={user?.display_name} src={user?.images[0].url}/>
        <div className="header__user-name">{user?.display_name}</div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

const mapStateToProps = (state) => ({
  info: state.info
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

