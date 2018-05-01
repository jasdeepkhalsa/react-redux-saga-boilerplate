import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '../../../src/containers/root'
import store from '../../../src/redux/store'

test('renders without crashing', () => {
	const elem = document.createElement('div')
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		elem
	)
	ReactDOM.unmountComponentAtNode(elem)
})
