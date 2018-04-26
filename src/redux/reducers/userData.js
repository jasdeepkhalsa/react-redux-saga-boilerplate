import * as Actions from '../actions'

const userData = (state = {}, action) => {
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