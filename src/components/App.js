import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
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
					<Route path="/charmanager" component={CharList} />
					<Route path="/welcome" component={LandingPage} />
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
				</Router>
			</div>
		)
	}
}

export default App
