import * as Actions from '../actions'

const initialState = {
	name: null,
	login: null,
	bio: null,
	avatar_url: null,
	public_repos: 0,
	public_gists: 0,
	error: null,
}

const userData = (state = initialState, action) => {
	switch (action.type) {
		case Actions.RECEIVE_USER_INFO:
			return {
				...state,
				...action.response,
				error: action.error,
			}
		case Actions.FAILED_USER_INFO:
			return {
				...initialState,
				error: action.error,
			}
		default:
			return state
	}
}

export default userData