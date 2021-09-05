import React from 'react';
import Sidebar from './../Sidebar';
import Body from './../Body';
import Footer from  './../Footer';
import PropTypes from 'prop-types';

import './Player.css';

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar/>
        <Body/>
      </div>
      <Footer spotify={spotify}/>
    </div>
  );
};

Player.propTypes = {
  
};

export default Player;