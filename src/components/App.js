import React, { Component } from 'react'
import {
	Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../history'
import Navbar from './header/Navbar'
import LandingPage from './landingPage/LandingPage'
import CharList from './charList/CharList'
import Login from './login/Login'
import Register from './register/Register'
import VerifyRegistration from './register/verify/VerifyRegistration'
import Docs from './docs/Docs'
import ForgottenAcc from './login/ForgottenAcc'
import VerifyRecovery from './login/verify/VerifyRecovery'
import DeleteModal from './modal/DeleteModal'
import VerifyDelete from './modal/verify/VerifyDelete'
import Deleted from './modal/Deleted'

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Router history={history}>
					<Navbar />
					<Switch>
						<Route
							path="/"
							exact
							render={() => {
								return this.props.login.isLoggedIn ? (
									<Redirect to="/charmanager" />
								) : (
									<Redirect to="/welcome" />
								)
							}}
						/>
						<Route
							path="/charmanager"
							exact
							component={CharList}
						/>
						<Route
							path="/welcome"
							component={LandingPage}
						/>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/docs" component={Docs} />
						<Route
							path="/verifyRegistration"
							component={VerifyRegistration}
						/>
						<Route
							path="/forgottenAccount"
							component={ForgottenAcc}
						/>
						<Route
							path="/verifyForgottenDetails"
							component={VerifyRecovery}
						/>
						<Route
							path="/charmanager/delete"
							component={DeleteModal}
						/>
						<Route
							path="/verifyDeletion"
							component={VerifyDelete}
						/>
						<Route path="/deleted" component={Deleted} />
						<Route
							path="*"
							render={() => {
								return this.props.login.isLoggedIn ? (
									<Redirect to="/charmanager" />
								) : (
									<Redirect to="/welcome" />
								)
							}}
						/>
					</Switch>
				</Router>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login
	}
}

export default connect(mapStateToProps)(App)
