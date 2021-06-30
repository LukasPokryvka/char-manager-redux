import React from 'react'
import { getPercentage } from '../../../helpers/helperFunctions'
import CharStarted from './CharStarted'
import CharHeader from './CharHeader'
import CharHeaderInfo from './CharHeaderInfo'
import CharProgressBar from './CharProgressBar'
import CharCircles from './CharCircles'
import CharDefault from './CharDefault'

const CharItem = ({ char }) => {
	const expPerc = getPercentage(char.exp, char.exp_level)
	const jobPercTemp = Math.floor(
		getPercentage(char.job_exp, char.job_level_exp)
	)
	const jobPerc =
		jobPercTemp === 100 ? '99.99' : jobPercTemp
	return (
		<li>
			<CharStarted botting={char.botting} />
			<CharHeader char={char} />
			<CharHeaderInfo char={char} />
			<ul className="char-item-list">
				<CharProgressBar
					value={char.hp}
					max={char.hp_max}
					color="is-danger"
				/>
				<CharProgressBar
					value={char.mp}
					max={char.mp_max}
					color="is-info"
				/>
				<li>
					<CharCircles
						expPerc={expPerc}
						jobPerc={jobPerc}
					/>
				</li>
				<CharDefault
					text="Death count:"
					value={char.death_count}
				/>
				<CharDefault text="Drops:" value={char.drops} />
				<CharDefault
					text="Exp per hour:"
					value={char.exp_hour.toFixed(2) + '%'}
				/>
				<CharDefault text="Sp:" value={char.sp} />
				<CharDefault
					text="Sp per hour:"
					value={char.sp_hour.toFixed(2)}
				/>
				<CharDefault
					text="Time to level:"
					value={char.time_to_level.toFixed(2)}
				/>
				<CharDefault
					text="Tracing:"
					value={char.tracing + ''}
				/>
				<CharDefault text="Guild:" value={char.guild} />
			</ul>
		</li>
	)
}

export default CharItem
