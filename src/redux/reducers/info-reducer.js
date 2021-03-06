import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLIST,
  SET_WEEKLY,
  SET_ITEM,
  SET_PLAYING,
  SET_PROGRESS
} from '../actions/info-action';

const initialState = {
  user: null,
  playlists: [],
  discoverWeekly: null,
  playing: false,
  item: null,
  token: null,
  progress: 0,
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
      return {
        ...state,
        playlists: payload
      }
    case SET_WEEKLY:
      console.log('WEEKLE', payload);
      return {
        ...state,
        discoverWeekly: payload
      }
    case SET_PLAYING:
      return {
        ...state,
        playing: payload
      }
    case SET_ITEM:
      return {
        ...state,
        item: payload
      }
    case SET_PROGRESS:
      return {
        ...state,
        progress: payload
      }
    default:
      return state
  }
};