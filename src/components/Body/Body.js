import React from 'react';
import Header from './../Header';
import SongRow from './../SongRow';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Body.css';


const CustomPlayIcon = withStyles((theme) => ({
  root: {
    width: 68,
    height: 68,
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
	return (
		<div className="body">
      <div className="body__top">
        <Header/>
        <div className="body__info">
          <img src={discoverWeekly?.images[0].url} ></img>
          <div className="body__info-text">
            <strong>PLAYLIST</strong>
            <h2>Discover weekly</h2>
            <p>{discoverWeekly?.description}</p>
          </div>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <CustomPlayIcon className="icon-green"/>
          <CustomFavoriteIcon className="icon-green"/>
          <CustomHorizonIcon/>
        </div>
        <div className="body__list">
          <div className="body__song-header">
            <p>#</p>
            <p>TITULO</p>
            <p>ALBUM</p>
            <p>AGREGADO AL</p>
            <p>AGREGADO AL</p>
          </div>
          <br/>
          <hr/>
          <br/>
          <div>
            {discoverWeekly?.tracks.items.map((item, index) => (<SongRow track={item.track} songNumber={index} key={index}/>))}
          </div>
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