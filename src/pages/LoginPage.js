import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Login from './../components/Login'
import { connect } from 'react-redux';
import { getTokenFromUrl, spotify } from './../constants';

import { SET_TOKEN_REQUESTED, SET_USER_REQUESTED } from './../redux/actions/info-action';

const LoginPage = ({
	info: {},
	setUserInfo,
	setTokenUser
}) => {

	const [token, setToken] = useState(null)
	useEffect(() => {
		const hash = getTokenFromUrl()
		let _token = hash.access_token
		window.location.hash = ""

		if (_token){
			setTokenUser(_token)
			console.log(_token)
			spotify.setAccessToken(_token)
			spotify.getMe().then(user => {
				console.log(user)
				setUserInfo(user)
			})
		}

	}, [])

	return (
		<div className="App">
			{token ? <div>{"holaa"}</div> : <Login/> }
		</div>
	);
};

LoginPage.propTypes = {
	
};

const mapStateToProps = (state) => ({
	info: state.info
});

const mapDispatchToProps = (dispatch) => ({
	setUserInfo: (data) => dispatch({type: SET_USER_REQUESTED, payload: data}),
	setTokenUser: (data) => dispatch({type: SET_TOKEN_REQUESTED, payload: data})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);