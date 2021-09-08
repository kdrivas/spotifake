import React, { useEffect } from 'react';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { 
  SET_PLAYING_REQUESTED,
  SET_ITEM_REQUESTED,
  SET_PROGRESS_REQUESTED
} from './../../redux/actions/info-action';
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
  info: {item, playing, progress},
  setPlaying, 
  setItem,
  setProgress
}) => {
  const min = item ? Math.floor(item.item.duration_ms / 60000) : 0
  const sec = item ? ((item.item.duration_ms % 60000) / 1000).toFixed(0) : 0

  const minProgress = item ? Math.floor(progress / 60000) : 0
  const secProgress = item ? ((progress % 60000) / 1000).toFixed(0) : 0

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      setPlaying(false);
    } else {
      spotify.play();
      setPlaying(true);
    }
    spotify.getMyCurrentPlayingTrack().then((data) => {
      if (data.body){
        setItem(data.body);
        setProgress(data.body.progress_ms);
      }
    });
  };

  const skipNext = () => {
    spotify.skipToNext();
    // Wait to update the data
    setTimeout(async function(){
      spotify.getMyCurrentPlayingTrack().then((data) => {
        if (data.body){
          setPlaying(data.body.is_playing);
          setItem(data.body);
          setProgress(0);
        }
      })
    }, 1000);
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    // Wait to update the data
    setTimeout(async function(){
      spotify.getMyCurrentPlayingTrack().then((data) => {
        if (data.body){
          setPlaying(data.body.is_playing);
          setItem(data.body);
          setProgress(0);
        }
      })
    }, 1000);
  };


  const handleChange = (event, newValue) => {
    const newProgress = (newValue * item.item.duration_ms / 100).toFixed(0)
    setProgress(newProgress);
    spotify.seek(newProgress);
  };

	return (
		<div className="footer">	
			<div className="footer__left">
        <img className="footer__album-logo" src={item?.item.album.images[0].url} alt={item?.item.name}></img>
        <div className="footer__song-info">
          <a className="footer__song-info__name">{item?.item.name}</a>
          <a className="footer__song-info__author">{item?.item.artists.map((artist) => artist.name).join(", ")}</a>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__buttons">
          <ShuffleIcon fontSize="small" className="footer__button"/>
          <SkipPreviousIcon onClick={skipPrevious} className="footer__button"/>
          {playing ? <PauseCircleFilledIcon onClick={handlePlayPause} className="footer__play-button"/> : <PlayCircleFilledIcon onClick={handlePlayPause} className="footer__play-button"/>} 
          <SkipNextIcon onClick={skipNext} className="footer__button"/>
          <RepeatIcon fontSize="small"  className="footer__button"/>
        </div>
        <div className="footer__time-info">
          <span>{minProgress}:{String(secProgress).padStart(2, '0')}</span>
          <SpotifySlider  value={item ? (100 * progress / item.item.duration_ms) : 0} onChange={handleChange}/>
          <span>{min}:{sec}</span>
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
  setProgress: (payload) => dispatch({type: SET_PROGRESS_REQUESTED, payload}),
});

export default connect(mapStateToProps , mapDispatchToProps)(Footer);