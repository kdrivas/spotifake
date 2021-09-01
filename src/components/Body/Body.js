import React from 'react';
import Header from './../Header';
import PropTypes from 'prop-types';

import './Body.css';

const Body = props => {
	return (
		<div className="body">
      <Header/>
			This is the body
		</div>
	);
};

Body.propTypes = {
	
};

export default Body;