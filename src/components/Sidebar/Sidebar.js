import React from 'react';
import SidebarOption from './../SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
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
      <SidebarOption title={"Inicio"} Icon={HomeOutlinedIcon}></SidebarOption>
      <SidebarOption title={"Buscar"} Icon={SearchIcon}></SidebarOption>
      <SidebarOption title={"Tu Biblioteca"} Icon={LibraryMusicOutlinedIcon}></SidebarOption>
      <div className="br"></div>
      <SidebarOption title={"Crear playlist"} Icon={AddBoxIcon}></SidebarOption>
      <SidebarOption title={"Tus me gusta"} Icon={FavoriteIcon}></SidebarOption>
      <hr />
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