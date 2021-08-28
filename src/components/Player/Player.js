import React from 'react';
import Sidebar from './../Sidebar';
import Body from './../Body';
import Footer from  './../Footer';
import PropTypes from 'prop-types';

import './Player.css';

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