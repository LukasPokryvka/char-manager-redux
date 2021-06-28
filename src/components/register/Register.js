import React from 'react'
import './Register.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import { registerUser } from '../../actions'

class Register extends React.Component {
	state = {
		email: '',
		isValid: false,
		isTouched: false,
		isLoading: false
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.regUser.response !==
			this.props.regUser.response
		) {
			this.setState({
				isValid: false,
				isTouched: false,
				isLoading: false
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

	handleRegisterSubmit = (e) => {
		e.preventDefault()
		this.setState({ isTouched: true })
		let shouldRegister = false
		if (!this.state.isValid) {
			shouldRegister = this.checkIfFormIsValid()
			if (this.state.isValid || shouldRegister) {
				this.setState({ isLoading: true }, () => {
					this.props.registerUser(this.state.email)
					this.setState({ email: '' })
				})
			}
		} else if (this.state.isValid) {
			this.setState({ isLoading: true }, () => {
				this.props.registerUser(this.state.email)
				this.setState({ email: '' })
			})
		}
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
		} else if (!this.props.regUser.response) {
			return (
				<div className="register">
					<div className="register-title">
						<h1>Signup with your email.</h1>
						<h2>
							After registration, you will receive login
							information.
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
								Register
							</button>
						</div>
					</form>
				</div>
			)
		} else if (this.props.regUser.alreadyRegistered) {
			return (
				<div className="register">
					<div className="register-title">
						<h1>We are sorry.</h1>
						<h2>
							It looks like this email is already
							registered. Try different email.
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
								Register
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
						<h2>
							Your registration was successful. Check your
							email for details.
						</h2>
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

export default connect(mapStateToProps, { registerUser })(
	Register
)
