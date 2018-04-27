import * as Actions from '../actions'

const initialState = {
	name: '',
	login: '',
	bio: '',
	avatar_url: '',
	public_repos: '',
	public_gists: '',
}

const userData = (state = initialState, action) => {
	switch (action.type) {
		case Actions.RECEIVE_USER_INFO:
			return {
				...state,
				...action.response,
			}
		default:
			return state
	}
}

export default userData