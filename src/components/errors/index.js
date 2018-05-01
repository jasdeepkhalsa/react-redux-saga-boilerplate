import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Selectors from '../../redux/selectors'

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
	error: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => {
	return { error: Selectors.error(state) }
}

export default connect(mapStateToProps, {})(Errors)