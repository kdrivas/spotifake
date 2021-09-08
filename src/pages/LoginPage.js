import React, { useState, useEffect } from 'react';
import Login from './../components/Login';
import Player from '../components/Player';
import { connect } from 'react-redux';
import { getTokenFromUrl } from './../constants';

import { 
  SET_PLAYLIST_REQUESTED, 
  SET_TOKEN_REQUESTED, 
  SET_USER_REQUESTED, 
  SET_WEEKLY_REQUESTED,
  SET_PLAYING_REQUESTED,
  SET_ITEM_REQUESTED,
  SET_PROGRESS_REQUESTED
} from './../redux/actions/info-action';

import PropTypes from 'prop-types';
import { myPlaylist } from './../constants';
import SpotifyWebApi from "spotify-web-api-node"

const spotify = new SpotifyWebApi();

const LoginPage = ({
  info: {token},
  setUserInfo,
  setTokenUser,
  setPlaylistsUser,
  setWeeklyList,
  setPlaying,
  setItem,
  setProgress
}) => {

  useEffect(() => {
    const hash = getTokenFromUrl()
    let _token = hash.access_token
    window.location.hash = ""

    if (_token){
      setTokenUser(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user.body)
        setUserInfo(user.body)
      });

      spotify.getUserPlaylists().then(playlists => {
        console.log(playlists);
        setPlaylistsUser(playlists.body);
      });

      spotify.getPlaylist(myPlaylist).then(playlists => {
        console.log(playlists);
        setWeeklyList(playlists.body);
      });

      spotify.getMyCurrentPlaybackState().then((data) => {
        // Log in spotify and play a song
        if (data.body){
          setPlaying(data.body.is_playing);
          setItem(data.body);
          setProgress(data.body.progress_ms);
        }
      });
    }
  }, [])

  return (
    <div className="App">
      {token ? <Player spotify={spotify}/> : <Login/> }
    </div>
  );
};

LoginPage.propTypes = {
  
};

const mapStateToProps = (state) => ({
  info: state.info
});

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (payload) => dispatch({type: SET_USER_REQUESTED, payload}),
  setTokenUser: (payload) => dispatch({type: SET_TOKEN_REQUESTED, payload}),
  setPlaylistsUser: (payload) => dispatch({type: SET_PLAYLIST_REQUESTED, payload}),
  setWeeklyList: (payload) => dispatch({type: SET_WEEKLY_REQUESTED, payload}),
  setPlaying: (payload) => dispatch({type: SET_PLAYING_REQUESTED, payload}),
  setItem: (payload) => dispatch({type: SET_ITEM_REQUESTED, payload}),
  setProgress: (payload) => dispatch({type: SET_PROGRESS_REQUESTED, payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);