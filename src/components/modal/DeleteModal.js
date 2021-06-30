import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'
import history from '../../history'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions'
import charManager from '../../apis/charManager'

const DeleteModal = (props) => {
	const [email, setEmail] = useState('')
	const [isValid, setIsValid] = useState(false)

	useEffect(() => {
		if (email === props.login.email) setIsValid(true)
		else setIsValid(false)
	}, [email, props.login.email])

	const handleChange = (e) => {
		setEmail(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (isValid) {
			charManager
				.delete('/delete', {
					params: {
						email: email
					}
				})
				.then((response) => {
					console.log(response)
					if (response.data.success) {
						props.logoutUser()
						history.push('/deleted')
					}
				})
				.catch((reponse) => {
					console.log(reponse.data)
				})
		}
	}

	return ReactDOM.createPortal(
		<div
			className="modal-bg"
			onClick={() => history.push('/charmanager')}
		>
			<div
				className="modal-content"
				onClick={(e) => e.stopPropagation()}
			>
				<div>
					<h1>Account Delete</h1>
					<h2>
						To delete your account, please enter your email
					</h2>
					<code>{props.login.email}</code>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							value={email}
							onChange={handleChange}
							className={isValid ? `is-valid` : 'not-valid'}
						/>
						<button type="submit">Delete</button>
					</form>
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	)
}

const mapStateToProps = (state) => {
	return {
		login: state.login
	}
}

export default connect(mapStateToProps, { logoutUser })(
	DeleteModal
)
