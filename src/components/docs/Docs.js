import React from 'react'
import './Docs.css'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import { connect } from 'react-redux'

const Docs = (props) => {
	console.log(props.logUser)
	return (
		<div className="docs">
			<div className="docs-title">
				<h1>Docs</h1>
			</div>
			<div className="docs-text">
				<h2>
					In your phBot Manager, go to <span>Manager</span>{' '}
					{'>'} <span>Options</span>
				</h2>
			</div>
			<div className="docs-img">
				<img src={img2} alt="img1" />
			</div>
			<div className="docs-text">
				<h2>
					Then, in the top bar click on <span>HTTP</span>{' '}
					and place this link in <span>URI</span> like shown
					on the screenshot.
				</h2>
				<code>
					168.235.110.165:8081/postChars?accountId=
					{props.logUser.accId}
				</code>
				<h2>
					Set the <span>Upload Interval</span> to 5000 ms.
					Don't forget to click on the <span>Save</span>{' '}
					button!
				</h2>
			</div>
			<div className="docs-img">
				<img src={img3} alt="img1" />
			</div>
			<div className="docs-text">
				<h2>That's it, enjoy your characters anywhere.</h2>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		logUser: state.login
	}
}

export default connect(mapStateToProps)(Docs)
