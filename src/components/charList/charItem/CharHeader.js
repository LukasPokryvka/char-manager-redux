import React from 'react'
import './CharItem.css'

const CharHeader = ({ char }) => {
	return (
		<div className="char-item-header">
			<div>
				<h2>{char.name}</h2>
				<h3>{char.server}</h3>
			</div>
			<div>
				<h4>Lv. {char.level}</h4>
				<h4>Job lv. {char.job_level}</h4>
			</div>
		</div>
	)
}

export default CharHeader
