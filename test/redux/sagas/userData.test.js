import { call, put } from 'redux-saga/effects'
import { userData, URL_GITHUB_API_USERS, successFn } from '../../../src/redux/sagas/userData'
import FetchJson from '../../../src/utils/fetchJson'

const action = { payload: 'john' }
const iterator = userData(action)
const iteratorFinished = { done: true, value: undefined }

test('Full test of userData saga', () => {
	expect(iterator.next().value).toEqual(call(FetchJson, `${URL_GITHUB_API_USERS}/${action.payload}`))
	const success = successFn()
	expect(iterator.next().value).toEqual(put(success))
	expect(iterator.next()).toEqual(iteratorFinished)
})