import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLIST
} from '../actions/info-action';

const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null
};

export default(state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER:
      return {
        ...state, 
        user: payload
      }
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      }
    case SET_PLAYLIST:
      console.log('dentro del reducer', payload)
      return {
        ...state,
        playlists: payload
      }
    default:
      return state
  }
};