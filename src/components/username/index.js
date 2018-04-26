import React, { Component } from 'react'
import style from './style.scss'
import { connect } from 'react-redux'
import * as Actions from '../../redux/actions'

export class Username extends Component {
	constructor(props) {
		super(props)
		this.input = React.createRef()
		this.onButtonClick = this.onButtonClick.bind(this)
	}

	onButtonClick() {
		const { value } = this.input.current
		this.props.fetchUserInfo(value)
	}

	render() {
		return (
			<div className={style.component}>
				<input type='text' ref={ this.input } />
				<button onClick={ this.onButtonClick }>
					Find GitHub User
				</button>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchUserInfo: payload => dispatch(Actions.fetchUserInfo(payload)),
})

export default connect(null, mapDispatchToProps)(Username)