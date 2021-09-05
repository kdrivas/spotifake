import React, { useState } from 'react';
import './SongRow.css';
import PropTypes from 'prop-types';

const SongRow = ({track, songNumber}) => {
  const [selected, setSelected] = useState(false);
  const mouseEnter = (event) => {
    setSelected(true);
  }

  const mouseLeave = (event) => {
    setSelected(false);
  }

  return (
    <div className="song-row" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className="song-row__number">
        {selected ? <i className="fas fa-play"></i> : <h4>{songNumber + 1}</h4>}
      </div>
      <div className="song-row__info">
        <img src={track.album.images[0].url} className="song-row__image"/>
        <div className="song-row__album-info">
          <h4>{track.name}</h4>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="song-row__album">
        {track.album.name}
      </div>
      <div className="song-row__duration">
        {Math.floor(track.duration_ms / 60000)}:{((track.duration_ms % 60000) / 1000).toFixed(0)}
      </div>
    </div>
  );
};

SongRow.propTypes = {
  
};

export default SongRow;