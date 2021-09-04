import React from 'react';

import './SongRow.css';
import PropTypes from 'prop-types';

const SongRow = ({track, songNumber}) => {
  return (
    <div className="song-row">
      <h2>{songNumber + 1}</h2>
      <div className="song-row__info">
        <img src={track.album.images[0].url} className="song-row__image"/>
        <div className="song-row__album-info">
          <h3>{track.name}</h3>
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