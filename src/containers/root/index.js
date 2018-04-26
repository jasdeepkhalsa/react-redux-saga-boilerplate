import React, { Component } from 'react'
import style from './style.scss'

import logo from '../../assets/logo.svg'

// Child components
import Username from '../../components/username'
import UserDetails from '../../components/user-details'
import Errors from '../../components/errors'

export default class RootContainer extends Component {
	render() {
		return (
			<div>
				<div className={style.app}>
					<header className={style['app-header']}>
						<img src={logo} className={style['app-logo']} alt="logo" />
						<h1 className={style['app-title']}>Welcome to GitHub Checker</h1>
					</header>
					<p className={style['app-intro']}>
						To get started, type a GitHub username and hit the <code>Find GitHub User</code> button.
					</p>
				</div>
				<Username />
				<UserDetails />
				<Errors />
			</div>
		)
	}
}