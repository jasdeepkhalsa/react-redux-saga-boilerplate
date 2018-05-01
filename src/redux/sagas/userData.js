import { call, put, takeLatest } from 'redux-saga/effects'
import FetchJson from '../../utils/fetchJson'
import * as Actions from '../actions'

export const URL_GITHUB_API_USERS = 'https://api.github.com/users'

export function successFn(response) {
	return {
		type: Actions.RECEIVE_USER_INFO,
		response: response,
		error: null,
	}
}

export function faliureFn(error) {
	return {
		type: Actions.FAILED_USER_INFO,
		error: error.statusText,
	}
}

export function* userData(action) {
	if (action) {
		try {
			const response = yield call(FetchJson, `${URL_GITHUB_API_USERS}/${action.payload}`)
			const success = successFn(response)
			yield put(success)
		} catch (error) {
			const faliure = faliureFn(error)
			yield put(faliure)
		}
	}
}

export function* watchUserData() {
	yield takeLatest(Actions.FETCH_USER_INFO, userData)
}