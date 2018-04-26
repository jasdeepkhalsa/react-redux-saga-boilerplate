import React from 'react'
import ReactDOM from 'react-dom'
import RootContainer from './containers/root'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/index.scss'

ReactDOM.render(
	<Provider store={store}>
		<RootContainer />
	</Provider>,
	document.getElementById(`root`)
)