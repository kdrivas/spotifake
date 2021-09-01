import React from 'react';
import Header from './../Header';
import PropTypes from 'prop-types';

import './Body.css';

const Body = props => {
	return (
		<div className="body">
      <Header/>
			<div className="body__info">
        <img className="body__info-img"></img>
        <div className="body__info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>asda</p>
        </div>
      </div>
		</div>
	);
};

Body.propTypes = {
	
};

export default Body;