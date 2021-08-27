import React, { useEffect, useState } from 'react'
import { getTokenFromUrl, spotify } from './constants';
import './App.css';

import SpotifyWebApi from "spotify-web-api-js";

import store from './redux/store';
import { Provider } from 'react-redux';
import LoginPage from './pages/LoginPage';

const s = new SpotifyWebApi();

function App() {

  return (
		<Provider store={store}>
			<LoginPage/>
		</Provider>
  );
}

export default App;
