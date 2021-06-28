import React from 'react'
import './CharItem.css'
import goldImg from '../../../assets/gold.png'

const CharHeaderInfo = ({ char }) => {
	return (
		<div className="char-item-info">
			<div>
				<h5>
					<img src={goldImg} alt="Golds"></img>
					{char.gold
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
				</h5>
			</div>
			<div>
				<p>{char.zone_name}</p>
				<small>
					{char.x}, {char.y}
				</small>
			</div>
		</div>
	)
}

export default CharHeaderInfo
