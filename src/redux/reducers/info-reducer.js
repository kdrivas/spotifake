import {
  SET_USER,
  SET_TOKEN
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
    default:
      return state
  }
};