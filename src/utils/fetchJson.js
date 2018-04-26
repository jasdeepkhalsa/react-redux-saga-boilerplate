import Logger from './logger'

function* fetchJson(url, settings) {
	try {
		const response = yield fetch(url, settings)
		const output = yield response.json()
		return output
	} catch(e) {
		Logger('The following error has occurred', e)
	}
}

export default fetchJson
