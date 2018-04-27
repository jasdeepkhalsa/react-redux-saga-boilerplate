import React, { Component } from 'react'
import style from './style.scss'
import { connect } from 'react-redux'

export class UserDetails extends Component {
	render() {
		const isUserDataLoaded = this.props.userData.name
		const { name, login, bio, avatar_url, public_repos, public_gists } = this.props.userData
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
}

const mapStateToProps = (state, ownProps) => {
	return { userData: state.userData }
}

export default connect(mapStateToProps, {})(UserDetails)