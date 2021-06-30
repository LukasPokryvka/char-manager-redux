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
			? history.push('/charmanager')
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
						<Link to="/docs" className="sign-in">
							Docs
						</Link>
						<div className="navbar-vertical"></div>
						<Link
							to="/login"
							className="sign-in"
							onClick={() => this.props.logoutUser()}
						>
							Login
						</Link>
						<Link
							to="/register"
							className="sign-up"
							onClick={() => this.props.registrationReset()}
						>
							Register
						</Link>
					</div>
				)}
				{this.props.isLoggedIn && (
					<div className="navbar-navigation">
						<Link
							to="/charmanager/delete"
							className="sign-in"
						>
							Delete
						</Link>
						<Link to="/docs" className="sign-in">
							Docs
						</Link>
						<div className="navbar-vertical"></div>
						<Link
							to="/welcome"
							className="sign-up"
							onClick={() => this.props.logoutUser()}
						>
							Logout
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
