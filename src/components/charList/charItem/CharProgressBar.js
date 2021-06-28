import React from 'react'
import './CharItem.css'

const CharProgressbar = ({ color, value, max }) => {
	return (
		<li>
			<progress
				className={`progress ${color}`}
				value={value}
				max={max}
			></progress>
		</li>
	)
}

export default CharProgressbar
