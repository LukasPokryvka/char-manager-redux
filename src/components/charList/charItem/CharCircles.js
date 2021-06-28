import React from 'react'
import {
	CircularProgressbar,
	buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './CharItem.css'

const CharCircles = ({ expPerc, jobPerc }) => {
	return (
		<div className="circular-progressbar">
			<CircularProgressbar
				value={expPerc}
				text={`${expPerc}%`}
				styles={{
					path: { stroke: '#48C78E' },
					text: {
						fill: '#48C78E'
					}
				}}
			/>
			<CircularProgressbar
				value={+jobPerc - 0.2 + ''}
				text={`${jobPerc}%`}
				styles={buildStyles({
					strokeLinecap: 'butt',
					pathColor: '#FFE08A',
					textColor: '#FFE08A'
				})}
			/>
		</div>
	)
}

export default CharCircles
