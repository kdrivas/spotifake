import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import { getTokenFromUrl, spotify } from './constants';
import './App.css';

import SpotifyWebApi from "spotify-web-api-js";

const s = new SpotifyWebApi();

function App() {
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
}

export default App;
