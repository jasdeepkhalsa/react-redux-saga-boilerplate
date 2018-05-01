import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Selectors from '../../redux/selectors'

const ifNotNull = (value) => {
	if (value === null) {
		return '(blank)'
	}

	return value
}

const UserDetails = ({ userData }) => {
	const isUserDataLoaded = !!userData.id
	const { name, login, bio, avatar_url, public_repos, public_gists } = userData

	return (
		isUserDataLoaded
			?
			<div className={style.component} >
				<p>You have retrieved details for:</p>
				<p><strong>{ name ? `${name} ` : null}</strong>(<code>{ ifNotNull(login) }</code>) who has { ifNotNull(public_repos) } repos and { ifNotNull(public_gists) } gists</p>
				<p>Bio: { ifNotNull(bio) }</p>
				<img src={ ifNotNull(avatar_url) } alt={ ifNotNull(name) } />
			</div>
			: null
	)
}

UserDetails.propTypes = {
	userData: PropTypes.shape({
		name: PropTypes.string,
		login: PropTypes.string,
		bio: PropTypes.string,
		avatar_url: PropTypes.string,
		public_repos: PropTypes.number,
		public_gists: PropTypes.number,
	}),
}

const mapStateToProps = (state, ownProps) => {
	return { userData: Selectors.userData(state) }
}

export default connect(mapStateToProps, {})(UserDetails)