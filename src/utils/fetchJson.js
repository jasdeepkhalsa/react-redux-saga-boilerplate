import Logger from './logger'

function* fetchJson(url, settings) {
	try {
		const response = yield fetch(url, settings).then(handleErrors)
		const output = yield response.json()
		return output
	} catch(e) {
		Logger('The following error has occurred', e)
		return yield Promise.reject(e)
	}
}

function handleErrors(response) {
	if (!response.ok) {
		return Promise.reject(response)
	}
	return response
}

export default fetchJson
