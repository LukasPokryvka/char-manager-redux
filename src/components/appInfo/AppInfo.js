import React from 'react'
import './AppInfo.css'

const AppInfo = ({ lastUpdated, accId, numberOfChars }) => {
	return (
		<div className="app-info">
			<h1>
				Last updated: <span>{lastUpdated}</span>
			</h1>
			<h1>
				Your account ID: <span>{accId}</span>
			</h1>
			<h1>
				Number of chars: <span>{numberOfChars}</span>
			</h1>
		</div>
	)
}

export default AppInfo
