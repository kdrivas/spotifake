import React, { useMemo } from 'react';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Footer.css';

const Footer = (props) => {
  const sizeIconContext = useMemo(() => ({size:"6em"}), [])

	return (
		<div className="footer">	
			<div className="footer__left">
        <p>Album and song details</p>
      </div>
      <div className="footer__center">
        <div className="footer__buttons">
          <ShuffleIcon fontSize="small"/>
          <SkipPreviousIcon/>
          <PlayCircleFilledIcon className="footer_play-button"/>
          <SkipNextIcon/>
          <RepeatIcon fontSize="small"/>
        </div>
        <div className="footer__time-info">
          <span>0:30</span>
          <div className="footer__progress-bar">&nbsp;</div>
          <span>5:39</span>
        </div>
      </div>
      <div className="footer__rigth">
        <PlaylistPlayIcon/>
        <VolumeDownIcon/>
        <Slider/>
      </div>
		</div>
	);
};

Footer.propTypes = {
	
};

export default Footer;