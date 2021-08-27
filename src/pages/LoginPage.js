import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Login from './../components/Login'

const LoginPage = props => {

	const [token, setToken] = useState(null)
	useEffect(() => {
		const hash = getTokenFromUrl()
		let _token = hash.access_token
		window.location.hash = ""

		if (_token){
			setToken(_token)
			console.log(_token)
			spotify.setAccessToken(_token)
			spotify.getMe().then(user => {
				console.log(user)
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

export default LoginPage;