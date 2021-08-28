import React, { useEffect, useState } from 'react'
import './App.css';

import store from './redux/store';
import { Provider } from 'react-redux';
import LoginPage from './pages/LoginPage';

function App() {

  return (
		<Provider store={store}>
			<LoginPage/>
		</Provider>
  );
}

export default App;
