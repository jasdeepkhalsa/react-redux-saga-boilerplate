import { createSelector } from 'reselect'

const userData = (state) => state.userData

const getUserData = createSelector(
	[ userData ],
	( userData ) => userData
)

export default getUserData