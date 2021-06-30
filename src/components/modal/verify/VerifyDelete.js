import React, { useState, useEffect } from 'react'
import history from '../../../history'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import charManager from '../../../apis/charManager'

const VerifyDelete = ({ location }) => {
	const keyAndEmail = location.search.split('&')
	const key = keyAndEmail[0].split('=')[1]
	const email = keyAndEmail[1].split('=')[1]
	const [isBeingDeleted, setIsBeingDeleted] = useState(true)

	useEffect(() => {
		charManager
			.delete('/verifyDeletion', {
				params: {
					key: key,
					email: email
				}
			})
			.then((response) => {
				console.log(response)
				setTimeout(() => {
					history.push('/welcome')
				}, 3000)
			})
			.catch(() => {
				setIsBeingDeleted(false)
			})
	})

	return (
		<div className="register">
			{isBeingDeleted && (
				<div className="register-title">
					<h1>Your profile is being deleted</h1>
					<h2>
						Hang on, shortly you will be redirected welcome
						page
					</h2>
				</div>
			)}

			{isBeingDeleted && (
				<div className="register-verification-loading">
					<Loader
						type="Circles"
						color="#c495fd"
						height={80}
						width={80}
					/>
				</div>
			)}
			{!isBeingDeleted && (
				<div className="register-title">
					<h1>We are sorry!</h1>
					<h2>
						It seems like this verifiaction link is expired.
					</h2>
				</div>
			)}
		</div>
	)
}

export default VerifyDelete
