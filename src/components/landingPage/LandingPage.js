import React from 'react'
import './LandingPage.css'
import welcomeBot from '../../assets/welcomeBot.png'

const LandingPage = () => {
	const welcomeConfig = {
		title: 'Welcome to ',
		appName: 'char_manager',
		description:
			'This manager allows you to track your SilkRoad characters in real-time.'
	}

	return (
		<div className="landing-page">
			<div className="landing-page-content">
				<div className="landing-page-text">
					<h1>
						{welcomeConfig.title}
						<span>{welcomeConfig.appName}</span>
					</h1>
					<h2>{welcomeConfig.description}</h2>
				</div>
				<div className="landing-page-img">
					<img src={welcomeBot} alt="Welcome Bot" />
				</div>
			</div>
		</div>
	)
}

export default LandingPage
