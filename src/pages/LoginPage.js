import React, { useState, useEffect } from 'react';
import Login from './../components/Login';
import Player from '../components/Player';
import { connect } from 'react-redux';
import { getTokenFromUrl, spotify } from './../constants';

import { 
  SET_PLAYLIST_REQUESTED, 
  SET_TOKEN_REQUESTED, 
  SET_USER_REQUESTED, 
  SET_WEEKLY_REQUESTED } from './../redux/actions/info-action';

import PropTypes from 'prop-types';

const LoginPage = ({
  info: {token},
  setUserInfo,
  setTokenUser,
  setPlaylistsUser,
  setWeeklyList
}) => {

  useEffect(() => {
    const hash = getTokenFromUrl()
    let _token = hash.access_token
    window.location.hash = ""

    if (_token){
      console.log(_token)
      setTokenUser(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log(user)
        setUserInfo(user)
      })

      spotify.getUserPlaylists().then(playlists => {
        console.log(playlists);
        setPlaylistsUser(playlists);
      })

      spotify.getPlaylist('37i9dQZEVXcNsAGCiuC5KH').then(playlists => {
        console.log(playlists);
        setWeeklyList(playlists);
      })
    }

  }, [])

  return (
    <div className="App">
      {token ? <Player/> : <Player/> }
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
  setWeeklyList: (payload) => dispatch({type: SET_WEEKLY_REQUESTED, payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);