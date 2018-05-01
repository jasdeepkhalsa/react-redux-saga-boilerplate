import React from 'react'
import style from './style.scss'

import logo from '../../assets/logo.svg'

// Child components
import Username from '../../components/username'
import UserDetails from '../../components/user-details'
import Errors from '../../components/errors'
import { connect } from 'react-redux'

const CLASS_COMPONENT = 'component'

const RootContainer = () => {
	return (
		<div>
			<div className={style[`${CLASS_COMPONENT}`]}>
				<header className={style[`${CLASS_COMPONENT}-header`]}>
					<img src={logo} className={style[`${CLASS_COMPONENT}-logo`]} alt="logo" />
					<h1 className={style[`${CLASS_COMPONENT}-title`]}>Welcome to GitHub Checker</h1>
				</header>
				<p className={style[`${CLASS_COMPONENT}-intro`]}>
					To get started, type a GitHub username and hit the <code>Find GitHub User</code> button.
				</p>
			</div>
			<Username />
			<UserDetails />
			<Errors />
		</div>
	)
}

export default connect(null, {})(RootContainer)