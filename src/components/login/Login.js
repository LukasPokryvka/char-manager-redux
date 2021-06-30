import React from 'react'
import './Login.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../actions'
import { Link } from 'react-router-dom'
import history from '../../history'

class Login extends React.Component {
	state = {
		userId: '',
		userPwd: '',
		isIdValid: false,
		isPwdValid: false,
		isTouched: false,
		isLoading: false
	}

	componentDidUpdate(prevProps) {
		if (prevProps.logUser !== this.props.logUser) {
			this.setState({
				isIdValid: false,
				isPwdValid: false,
				isTouched: false,
				isLoading: false
			})
			if (this.props.logUser.isLoggedIn) {
				history.push('/charmanager')
			}
		}
	}

	handleIdChange = (e) => {
		this.setState({ userId: e.target.value }, () => {
			if (this.state.isTouched) this.checkIfIdIsValid()
		})
	}

	handlePwdChange = (e) => {
		this.setState({ userPwd: e.target.value }, () => {
			if (this.state.isTouched) this.checkIfPwdIsValid()
		})
	}

	checkIfIdIsValid = () => {
		// const idRegex = /^Manager_+[a-zA-Z0-9]{10}$/
		// const idRegex = /^[a-zA-Z0-9]{5,20}$/
		if (true) {
			this.setState({ isIdValid: true })
			return true
		} else {
			this.setState({ isIdValid: false })
			return false
		}
	}

	checkIfPwdIsValid = () => {
		// const pwdRegex = /^[a-zA-Z0-9]{10}$/
		const pwdRegex = /^[a-zA-Z0-9]{5,10}$/
		if (pwdRegex.test(this.state.userPwd)) {
			this.setState({ isPwdValid: true })
			return true
		} else {
			this.setState({ isPwdValid: false })
			return false
		}
	}

	handleLoginSubmit = (e) => {
		e.preventDefault()
		this.setState({ isTouched: true })
		let shouldLogin = {
			id: false,
			pw: false
		}
		if (!this.state.isIdValid || !this.state.isPwdValid) {
			shouldLogin.id = this.checkIfIdIsValid()
			shouldLogin.pw = this.checkIfPwdIsValid()
			if (shouldLogin.id && shouldLogin.pw) {
				this.setState({ isLoading: true }, () => {
					this.props.loginUser(
						this.state.userId,
						this.state.userPwd
					)
					this.setState({ userId: '', userPwd: '' })
				})
			}
		} else if (
			this.state.isIdValid &&
			this.state.isPwdValid
		) {
			this.setState({ isLoading: true }, () => {
				this.props.loginUser(
					this.state.userId,
					this.state.userPwd
				)
				this.setState({ userId: '', userPwd: '' })
			})
		}
	}

	userIdErrorWarning = () => {
		if (!this.state.userId && this.state.isTouched) {
			return <small>User ID must not be empty</small>
		} else if (
			this.state.userId &&
			this.state.isTouched &&
			!this.state.isIdValid
		) {
			return <small>Wrong format of User ID</small>
		}
	}

	userPwdErrorWarning = () => {
		if (!this.state.userPwd && this.state.isTouched) {
			return <small>Password must not be empty</small>
		} else if (
			this.state.userPwd &&
			this.state.isTouched &&
			!this.state.isPwdValid
		) {
			return (
				<small>Password must contain 10 characters</small>
			)
		}
	}

	renderedItems = () => {
		if (this.state.isLoading) {
			return (
				<div className="login">
					<Loader
						type="Circles"
						color="#1ddecb"
						height={100}
						width={100}
					/>
				</div>
			)
		} else if (!this.props.logUser.isLoggedIn) {
			return (
				<div className="login">
					<div className="login-title">
						<h1>Login with your credentials.</h1>
						<h2>
							Your credentials are in your registration
							email.
						</h2>
					</div>
					<form onSubmit={this.handleLoginSubmit}>
						<div className="login-form">
							<label htmlFor="userId">User Id</label>
							<input
								type="text"
								id="userId"
								value={this.state.userId}
								onChange={this.handleIdChange}
							/>
							{this.userIdErrorWarning()}
							<label htmlFor="userPwd">User Password</label>
							<input
								type="password"
								id="userPwd"
								value={this.state.userPwd}
								onChange={this.handlePwdChange}
							/>
							<div>
								<Link
									to="/forgottenAccount"
									className="login-form-forgotten"
								>
									Forgot your account?
								</Link>
							</div>
							{this.userPwdErrorWarning()}
						</div>
						<div className="login-submit">
							<button onClick={this.handleLoginSubmit}>
								Login
							</button>
						</div>
						{this.props.logUser.isLoggedIn === false && (
							<div className="login-error">
								<h2>Wrong user id or user password</h2>
							</div>
						)}
					</form>
				</div>
			)
		} else {
			return null
		}
	}

	render() {
		return this.renderedItems()
	}
}

const mapStateToProps = (state) => {
	return {
		logUser: state.login
	}
}

export default connect(mapStateToProps, {
	loginUser,
	logoutUser
})(Login)
