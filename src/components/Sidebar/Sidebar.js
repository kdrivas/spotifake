import React from 'react';
import SidebarOption from './../SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Sidebar.css';

const Sidebar = ({
  info: {playlists}
}) => {
  console.log('dentro de sidebar', playlists?.items?.map(item => item.name))
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
      <SidebarOption title={"Inicio"} Icon={HomeIcon}></SidebarOption>
      <SidebarOption title={"Buscar"} Icon={SearchIcon}></SidebarOption>
      <SidebarOption title={"Tu Biblioteca"} Icon={LibraryMusicIcon}></SidebarOption>
      {playlists?.items?.map((item, index) => <SidebarOption title={item.name} key={index} /> )}
    </div>
  );
};

Sidebar.propTypes = {
  
};

const mapStateToProps = (state) => ({
  info: state.info
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);