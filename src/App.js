import React, { useEffect, useState } from 'react'
import './App.css';

import store from './redux/store';
import { Provider } from 'react-redux';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <LoginPage/>
      </Provider>
    </div>
  );
}

export default App;
