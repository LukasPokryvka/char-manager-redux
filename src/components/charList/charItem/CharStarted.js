import React from 'react'
import './CharItem.css'

const CharStarted = ({ botting }) => {
	return (
		<span
			className={`dot ${
				botting ? 'dot-online' : 'dot-offline'
			}`}
			title={botting ? 'Bot Started' : 'Bot Stopped'}
		></span>
	)
}

export default CharStarted
