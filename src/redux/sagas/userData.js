import { call, put, takeLatest } from 'redux-saga/effects'
import FetchJson from '../../utils/fetchJson'
import Logger from '../../utils/logger'
import * as Actions from '../actions'

const URL_GITHUB_API_USERS = 'https://api.github.com/users'

function* userData(action) {
	if (action) {
		try {
			const response = yield call(() => FetchJson(`${URL_GITHUB_API_USERS}/${action.payload}`))
			yield put({
				type: Actions.RECEIVE_USER_INFO,
				response: yield response,
			})
		} catch (e) {
			yield Logger({
				message: e.message,
			})
		}
	}
}

export function* watchUserData() {
	yield takeLatest(Actions.FETCH_USER_INFO, userData)
}