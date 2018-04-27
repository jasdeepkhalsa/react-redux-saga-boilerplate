import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Errors = ({ error }) => {
	const isError = !!error

	return (
		isError ?
			<div className={style.component}>
				The following error has occurred: { error }
			</div>
			: null
	)
}

Errors.propTypes = {
	error: PropTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => {
	return { error: state.userData ? state.userData.error : null }
}

export default connect(mapStateToProps, {})(Errors)