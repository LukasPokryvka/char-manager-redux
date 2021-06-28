import React from 'react'
import bot from '../../assets/bot.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
	logoutUser,
	registrationReset
} from '../../actions'
import history from '../../history'

class Navbar extends React.Component {
	handleOnLogoClick = () => {
		this.props.isLoggedIn
			? history.push('/')
			: history.push('/welcome')
	}

	render() {
		return (
			<div className="navbar-custom">
				<div
					className="navbar-title"
					onClick={this.handleOnLogoClick}
				>
					<img src={bot} alt="logo" />
					<h2>Char_Manager</h2>
				</div>

				{!this.props.isLoggedIn && (
					<div className="navbar-navigation">
						<Link
							to="/login"
							className="sign-in"
							onClick={() => this.props.logoutUser()}
						>
							Sign In
						</Link>
						<Link
							to="/register"
							className="sign-up"
							onClick={() => this.props.registrationReset()}
						>
							Sign Up
						</Link>
					</div>
				)}
				{this.props.isLoggedIn && (
					<div className="navbar-navigation">
						<Link
							to="/welcome"
							className="sign-up"
							onClick={() => this.props.logoutUser()}
						>
							Sign Out
						</Link>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.login.isLoggedIn
	}
}

export default connect(mapStateToProps, {
	logoutUser,
	registrationReset
})(Navbar)
