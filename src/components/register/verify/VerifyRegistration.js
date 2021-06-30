import React, { useEffect, useState } from 'react'
import history from '../../../history'
import '../Register.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import charManager from '../../../apis/charManager'

const VerifyRegistration = ({ location }) => {
	const keyAndEmail = location.search.split('&')
	const key = keyAndEmail[0].split('=')[1]
	const email = keyAndEmail[1].split('=')[1]
	const [isVerified, setIsVerified] = useState(true)

	useEffect(() => {
		console.log('Starting hook', key, email)
		charManager
			.get('/verifyRegistration', {
				params: {
					key: key,
					email: email
				}
			})
			.then((response) => {
				console.log(response)
				setTimeout(() => {
					history.push('/login')
				}, 3000)
			})
			.catch(() => {
				setIsVerified(false)
			})

		return () => {
			console.log('Cleanup')
		}
	})

	return (
		<div className="register">
			{isVerified && (
				<div className="register-title">
					<h1>Your profile is being verified.</h1>
					<h2>
						Hang on, shortly you will be redirected to sign
						in page.
					</h2>
				</div>
			)}

			{isVerified && (
				<div className="register-verification-loading">
					<Loader
						type="Circles"
						color="#c495fd"
						height={80}
						width={80}
					/>
				</div>
			)}
			{!isVerified && (
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

export default VerifyRegistration
