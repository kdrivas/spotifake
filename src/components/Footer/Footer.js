import React, { useEffect } from 'react';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  SET_PLAYING_REQUESTED,
  SET_ITEM_REQUESTED
} from '../../redux/actions/info-action';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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

const Footer = ({
  spotify,
  info: {item, playing},
  setPlaying,
  setItem
}) => {

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((data) => {
      // Log in spotify and play a song
      console.log('play', data.body)
      setPlaying(data.body.is_playing);
      setItem(data.body.item);
    });
  }, [spotify]);

	return (
		<div className="footer">	
			<div className="footer__left">
        <img className="footer__album-logo" src={item?.album.images[0].url} alt={item?.name}></img>
        <div className="footer__song-info">
          <a className="footer__song-info__name">{item?.name}</a>
          <a className="footer__song-info__author">{item.artists.map((artist) => artist.name).join(", ")}</a>
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

const mapStateToProps = (state) => ({
  info: state.info
})

const mapDispatchToProps = (dispatch) => ({
  setPlaying: (payload) => dispatch({type: SET_PLAYING_REQUESTED, payload}),
  setItem: (payload) => dispatch({type: SET_ITEM_REQUESTED, payload}),
});

export default connect(mapStateToProps , mapDispatchToProps)(Footer);