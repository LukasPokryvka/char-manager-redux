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
	componentDidMount() {
		if (!this.props.loggedUser.isLoggedIn) {
			if (this.state.fetchInterval) {
				clearInterval(this.state.fetchInterval)
			}
			history.push('/welcome')
		} else if (!this.state.fetchInterval) {
			this.props.fetchChars(this.props.loggedUser.accId)
			const interval = setInterval(() => {
				this.props.fetchChars(this.props.loggedUser.accId)
			}, 5000)
			this.setState({ fetchInterval: interval })
		}
	}
	componentWillUnmount() {
		clearInterval(this.state.fetchInterval)
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
