import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const UserDetails = ({ userData }) => {
	const isUserDataLoaded = !!userData.name
	const { name, login, bio, avatar_url, public_repos, public_gists } = userData

	return (
		isUserDataLoaded
			?
			<div className={style.component} >
				<p>You have retrieved details for:</p>
				<p><strong>{ name }</strong> (<code>{ login }</code>) who has { public_repos } repos and { public_gists } gists</p>
				<p>Bio: { bio }</p>
				<img src={ avatar_url } alt={ name } />
			</div>
			: null
	)
}

UserDetails.propTypes = {
	userData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
		avatar_url: PropTypes.string.isRequired,
		public_repos: PropTypes.number.isRequired,
		public_gists: PropTypes.number.isRequired,
	}),
}

const mapStateToProps = (state, ownProps) => {
	return { userData: state.userData }
}

export default connect(mapStateToProps, {})(UserDetails)