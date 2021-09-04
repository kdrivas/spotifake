import React from 'react';
import Header from './../Header';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Body.css';


const CustomPlayIcon = withStyles((theme) => ({
  root: {
    width: 70,
    height: 70,
    margin: 0,
    padding: 0,
  },
}))(PlayCircleFilledWhiteIcon);

const CustomFavoriteIcon = withStyles((theme) => ({
  root: {
    width: 35,
    height: 35,
  },
}))(FavoriteIcon);

const CustomHorizonIcon = withStyles((theme) => ({
  root: {
    width: 35,
    height: 35,
  },
}))(MoreHorizIcon);

const Body = ({
  info: {discoverWeekly}
}) => {
  console.log(discoverWeekly)
	return (
		<div className="body">
      <Header/>
			<div className="body__info">
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/5c37622a-7a39-4d95-bd4a-275878274ea3/metcon-7-zapatillas-de-entrenamiento-CHLK3h.png" ></img>
        <div className="body__info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <CustomPlayIcon className="icon-green"/>
          <CustomFavoriteIcon className="icon-green"/>
          <CustomHorizonIcon/>
        </div>
      </div>
		</div>
	);
};

Body.propTypes = {
	
};

const mapStateToProps = (state) => ({
  info: state.info
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Body);