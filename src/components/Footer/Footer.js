import React from 'react';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Footer.css';

const SpotifySlider = withStyles({
  root: {
    color: '#b2b2b2',
    height: 0,
    margin: 0,
    padding: 0,
  },
  thumb: {
    height: 12,
    width: 12,
    marginTop: -4,
    padding: 0,
    backgroundColor: '#fff',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    '&::after': {
      display: 'none',
    },
  },
  active: {},
  track: {
    height: 4,
    borderRadius: 4,
    '&:hover': {
      backgroundColor: '#1db954',
    },
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const Footer = (props) => {

	return (
		<div className="footer">	
			<div className="footer__left">
        <img className="footer__album-logo" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/5c37622a-7a39-4d95-bd4a-275878274ea3/metcon-7-zapatillas-de-entrenamiento-CHLK3h.png"></img>
        <div className="footer__song-info">
          <a className="footer__song-info__name" href="">Song</a>
          <a className="footer__song-info__author" href="">asdasdasdasdsa</a>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__buttons">
          <ShuffleIcon fontSize="small" className="footer__button"/>
          <SkipPreviousIcon className="footer__button"/>
          <PlayCircleFilledIcon className="footer_play-button"/>
          <SkipNextIcon className="footer__button"/>
          <RepeatIcon fontSize="small"  className="footer__button"/>
        </div>
        <div className="footer__time-info">
          <span>0:30</span>
          <SpotifySlider/>
          <span>5:39</span>
        </div>
      </div>
      <div className="footer__rigth">
        <div className="footer__controls">
          <PlaylistPlayIcon/>
          <VolumeDownIcon/>
          <SpotifySlider className="footer__volume-control"/>
        </div>
      </div>
		</div>
	);
};

Footer.propTypes = {
	
};

export default Footer;