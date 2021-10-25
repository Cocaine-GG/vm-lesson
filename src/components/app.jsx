import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './users/users'
import Navbar from './navbar'
import Main from './main'
import Login from './login'
import User from './users/user/user'

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/users" component={Users} />
				<Route exact path="/users/:userId" component={User} />
			</Switch>
		</Router>
	)
}

export default App
