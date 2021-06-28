import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import Navbar from './header/Navbar'
import LandingPage from './landingPage/LandingPage'
import CharList from './charList/CharList'
import Login from './login/Login'
import Register from './register/Register'

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Router history={history}>
					<Navbar />
					<Route path="/" exact component={CharList} />
					<Route path="/welcome" component={LandingPage} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Router>
			</div>
		)
	}
}

export default App
