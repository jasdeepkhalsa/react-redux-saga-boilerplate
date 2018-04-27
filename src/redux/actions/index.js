export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
export const FAILED_USER_INFO = 'FAILED_USER_INFO'

export const fetchUserInfo = (username) => (
	{
		type: FETCH_USER_INFO,
		payload: username,
	}
)