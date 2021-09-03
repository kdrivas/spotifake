import React from 'react';
import Header from './../Header';
import PropTypes from 'prop-types';

import './Body.css';

const Body = props => {
	return (
		<div className="body">
      <Header/>
			<div className="body__info">
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/5c37622a-7a39-4d95-bd4a-275878274ea3/metcon-7-zapatillas-de-entrenamiento-CHLK3h.png" ></img>
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