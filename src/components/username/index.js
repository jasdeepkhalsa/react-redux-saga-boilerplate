import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from '../../redux/actions'

const input = React.createRef()

const Username = ({ fetchUserInfo }) => {
	const onButtonClick = () => {
		const { value } = input.current
		fetchUserInfo(value)
	}

	return (
		<div className={style.component}>
			<input type='text' ref={ input } />
			<button onClick={ onButtonClick }>
				Find GitHub User
			</button>
		</div>
	)
}

Username.propTypes = {
	fetchUserInfo: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
	fetchUserInfo: payload => dispatch(Actions.fetchUserInfo(payload)),
})

export default connect(null, mapDispatchToProps)(Username)