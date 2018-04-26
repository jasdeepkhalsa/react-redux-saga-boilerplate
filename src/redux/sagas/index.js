import { all, call } from 'redux-saga/effects'
import { watchUserData } from './userData'

export default function* rootSaga() {
	yield all([
		call(watchUserData),
	])
}