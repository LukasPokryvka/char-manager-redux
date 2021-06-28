import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const CharItemLoading = ({ server }) => (
	<li className="item-loading">
		<h1>{server}</h1>
		<h2>Logging In</h2>
		<div>
			<Loader
				type="Rings"
				color="#1DDECB"
				height={50}
				width={50}
			/>
		</div>
	</li>
)

export default CharItemLoading
