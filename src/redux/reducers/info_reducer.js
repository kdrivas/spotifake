import {
	SET_USER
} from '../actions/info-action';

const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null
}

export default(state = initialState, {type, payload}) => {
	switch (type) {
		case SET_USER:
			return {
				...state, 
				user: payload
			}
	}
}