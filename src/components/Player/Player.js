import React from 'react';
import Sidebar from './../Sidebar'

import PropTypes from 'prop-types';

const Player = props => {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar/>
				<Body/>
			</div>
			<Footer/>
		</div>
	);
};

Player.propTypes = {
	
};

export default Player;