import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import {
	registrationReset,
	forgottenAccount
} from '../../actions'

class ForgottenAcc extends React.Component {
	state = {
		email: '',
		isTouched: false,
		isValid: false,
		isLoading: false
	}

	componentDidMount() {
		this.props.registrationReset()
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.regUser.success !==
			this.props.regUser.success
		) {
			this.setState({
				isValid: false,
				isTouched: false,
				isLoading: false
			})
		}
	}

	handleRegisterSubmit = (e) => {
		e.preventDefault()
		this.setState({ isTouched: true })
		let shouldRegister = false
		if (!this.state.isValid) {
			shouldRegister = this.checkIfFormIsValid()
			if (this.state.isValid || shouldRegister) {
				this.setState({ isLoading: true }, () => {
					this.props.forgottenAccount(this.state.email)
					this.setState({ email: '' })
				})
			}
		} else if (this.state.isValid) {
			this.setState({ isLoading: true }, () => {
				this.props.forgottenAccount(this.state.email)
				this.setState({ email: '' })
			})
		}
	}

	handleChange = (e) => {
		this.setState({ email: e.target.value }, () => {
			if (this.state.isTouched) {
				this.checkIfFormIsValid()
			}
		})
	}

	checkIfFormIsValid = () => {
		const emailRegex =
			/^[a-zA-Z0-9]{2,25}@[a-zA-Z0-9]{2,20}\.[A-Za-z]{2,15}$/
		if (emailRegex.test(this.state.email)) {
			this.setState({ isValid: true })
			return true
		} else {
			this.setState({ isValid: false })
			return false
		}
	}

	emailErrorWarning = () => {
		if (!this.state.email && this.state.isTouched) {
			return <small>Email must not be empty</small>
		} else if (
			this.state.email &&
			this.state.isTouched &&
			!this.state.isValid
		) {
			return <small>Wrong format of email</small>
		}
	}

	renderedItems = () => {
		if (this.state.isLoading) {
			return (
				<div className="register">
					<Loader
						type="Circles"
						color="#c495fd"
						height={100}
						width={100}
					/>
				</div>
			)
		} else if (!this.props.regUser.success) {
			return (
				<div className="register">
					<div className="register-title">
						<h1>Account recovery.</h1>
						<h2>
							Give us your email to reset your credentials.
						</h2>
					</div>
					<form onSubmit={this.handleRegisterSubmit}>
						<div className="register-form">
							<input
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
							{this.emailErrorWarning()}
						</div>
						<div className="register-submit">
							<button
								type="submit"
								onClick={this.handleRegisterSubmit}
							>
								Recover
							</button>
						</div>
					</form>
				</div>
			)
		} else if (
			this.props.regUser.resolution ===
			'Email not found in database.'
		) {
			return (
				<div className="register">
					<div className="register-title">
						<h1>We are sorry.</h1>
						<h2>
							This email is not registered. Try it again.
						</h2>
					</div>
					<form onSubmit={this.handleRegisterSubmit}>
						<div className="register-form">
							<input
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
							{this.emailErrorWarning()}
						</div>
						<div className="register-submit">
							<button
								type="submit"
								onClick={this.handleRegisterSubmit}
							>
								Recover
							</button>
						</div>
					</form>
				</div>
			)
		} else {
			return (
				<div className="register">
					<div className="register-title">
						<h1>Success!</h1>
						<h2>Check your email for verification link.</h2>
					</div>
				</div>
			)
		}
	}

	render() {
		return this.renderedItems()
	}
}

const mapStateToProps = (state) => {
	return {
		regUser: state.regUser
	}
}

export default connect(mapStateToProps, {
	registrationReset,
	forgottenAccount
})(ForgottenAcc)
