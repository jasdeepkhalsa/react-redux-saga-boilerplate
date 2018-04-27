import { createSelector } from 'reselect'

const error = (state) => state.userData.error

const getError = createSelector(
	[ error ],
	( error ) => error
)

export default getError