import React from 'react'
import './CharList.css'
import AppInfo from '../appInfo/AppInfo'
import CharItem from './charItem/CharItem'
import CharItemLoading from './charItem/CharItemLoading'
import { connect } from 'react-redux'
import { fetchChars } from '../../actions'
import { compareObjects } from '../../helpers/helperFunctions'
import history from '../../history'

class CharList extends React.Component {
	state = {
		fetchInterval: null
	}

	setFetchInterval = () => {
		this.props.fetchChars(this.props.loggedUser.accId)
		const interval = setInterval(() => {
			this.props.fetchChars(this.props.loggedUser.accId)
		}, 5000)
		this.setState({ fetchInterval: interval })
	}

	componentDidMount() {
		if (!this.props.loggedUser.isLoggedIn) {
			if (this.state.fetchInterval) {
				clearInterval(this.state.fetchInterval)
			}
			history.push('/welcome')
		} else {
			this.setFetchInterval()
			document.addEventListener('visibilitychange', () => {
				if (
					document.visibilityState === 'visible' &&
					!this.state.fetchInterval
				) {
					this.setFetchInterval()
				} else if (document.visibilityState === 'hidden') {
					clearInterval(this.state.fetchInterval)
					this.setState({ fetchInterval: null })
				}
			})
		}
	}
	componentWillUnmount() {
		clearInterval(this.state.fetchInterval)
		console.log('ima unmounting')
	}

	render() {
		return (
			<div>
				<AppInfo
					lastUpdated={this.props.chars.lastUpdated}
					accId={this.props.loggedUser.accId}
					numberOfChars={this.props.chars.chars.length}
				/>
				<ul className="char-list">
					{this.props.chars.chars
						.sort(compareObjects)
						.map((char, index) => {
							return char.name ? (
								<CharItem key={index} char={char} />
							) : (
								<CharItemLoading
									key={index}
									server={char.server}
								/>
							)
						})}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		chars: state.chars,
		loggedUser: state.login
	}
}

export default connect(mapStateToProps, {
	fetchChars
})(CharList)
